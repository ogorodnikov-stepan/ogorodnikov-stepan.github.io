import { ArrowDown, ArrowUp } from 'lucide-react';
import { useAppDispatch } from '@/app/store/hooks';
import { fileSet } from '@/app/store/dataSlice';
import type { FileState } from '@/app/store/dataSlice';
import { Button } from '@/components/ui/button';

interface Props {
  file?: FileState;
  isPrev?: boolean;
  isNext?: boolean;
}

export default function PageLink({ file, isPrev, isNext }: Props) {
  const dispatch = useAppDispatch();

  return (
    <div className="min-h-[2.5rem]">
      {file?.name && (
        <Button
            className="flex flex-row gap-[0.5rem] font-mono text-md text-link"
            variant="ghost"
            onClick={() => dispatch(fileSet(file.name || ''))}
          >
            {file.nav}
            {isNext && <ArrowDown size={16} />}
            {isPrev && <ArrowUp size={16} />}
        </Button>
      )}
    </div>
  );
}