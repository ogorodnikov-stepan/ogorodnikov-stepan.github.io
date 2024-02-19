import clsx from 'clsx';
import { ReactSVG } from 'react-svg';
import { useAppSelector, useAppDispatch } from '@/app/store/hooks';
import { fileSet } from '@/app/store/dataSlice';
import { Skeleton } from '@/components/ui/skeleton';

export default function Nav() {
  const files = useAppSelector((state) => state.data.files);
  const current = useAppSelector((state) => state.data.currentFile.name);
  const dispatch = useAppDispatch();

  return (
    <nav>
      <ul className="hidden sm:block">
        { files.map((file, i) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
          <li key={i}>
            { file ? (
              <button
                className={clsx(
                  'flex flex-row items-center gap-[0.5rem] w-full p-[0.5rem]',
                  (file === current) && 'font-semibold bg-accent'
                )}
                type="button"
                onClick={() => dispatch(fileSet(file))}
              >
                <ReactSVG
                  className="h-[1.25rem] w-[1.25rem]"
                  src="images/logos/react.svg"
                />
                <span className="font-mono">
                  {file.split('-').pop()}
                </span>
              </button>
            ) : (
              <Skeleton className="skeleton h-4 w-32 m-6" />
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}