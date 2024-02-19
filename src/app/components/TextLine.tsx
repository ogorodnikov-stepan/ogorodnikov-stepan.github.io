import type { ReactNode } from 'react';

export default function TextLine({ children }: { children?: ReactNode; }) {
  return (
    <div className="flex flex-row items-center gap-[1rem] flex-wrap">
      {children}
    </div>
  );
}