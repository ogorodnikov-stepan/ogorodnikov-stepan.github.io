import type { ReactNode } from 'react';

export default function InlineCode({ children }: { children?: ReactNode; }) {
  return (
    <code className="rounded bg-muted p-[0.5rem] font-mono text-sm font-semibold">
      {children}
    </code>
  );
}