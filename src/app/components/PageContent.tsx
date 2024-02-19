import type { ReactNode } from 'react';

export default function PageContent({ children }: { children: ReactNode; }) {
  return (
    <div className="flex flex-col gap-[1.5rem] min-h-[15rem] w-full md:w-[35rem]">
      {children}
    </div>
  );
}