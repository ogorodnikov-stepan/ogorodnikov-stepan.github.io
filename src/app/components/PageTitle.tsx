import type { ReactNode } from 'react';

export default function PageTitle({ children }: { children: ReactNode; }) {
  return (
    <h1 className="text-2xl sm:text-3xl font-bold">
      {children}
    </h1>
  );
}