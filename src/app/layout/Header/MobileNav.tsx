import { ReactSVG } from 'react-svg';
import { useAppSelector, useAppDispatch } from '@/app/store/hooks';
import { fileSet } from '@/app/store/dataSlice';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function MobileNav() {
  const files = useAppSelector((state) => state.data.files);
  const current = useAppSelector((state) => state.data.currentFile.name);
  const dispatch = useAppDispatch();

  return (
    <nav className="flex sm:hidden grow">
      <Select
        value={current}
        onValueChange={(value) => dispatch(fileSet(value))}
      >
        <SelectTrigger className="w-full">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            { files.map((file) => (
              <SelectItem
                key={file}
                value={file}
              >
                <div className="flex flex-row items-center gap-[0.5rem]">
                  <ReactSVG
                    className="h-[1.25rem] w-[1.25rem]"
                    src="images/logos/react.svg"
                  />
                  <span className="font-mono text-lg">
                    {file.split('-').pop()}
                  </span>
                </div>
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </nav>
  );
}