import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface Props {
  className?: string;
  children?: ReactNode;
}

export default function Text({ className, children }: Props) {
  return (
    <span className={cn(className, 'text-lg font-semibold')}>
      {children}
    </span>
  );
}