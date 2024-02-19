import { useAppSelector } from '@/app/store/hooks';
import PageLink from '@/app/components/PageLink';
import Home from '@/app/content/01-Home';
import Skills from '@/app/content/02-Skills';
import React from '@/app/content/03-React';
import CSS from '@/app/content/04-CSS';
import BuiltWith from '@/app/content/05-BuiltWith';

const FILES: Record<string, () => JSX.Element> = {
  '01-Home.tsx': Home,
  '02-Skills.tsx': Skills,
  '03-React.tsx': React,
  '04-CSS.tsx': CSS,
  '05-BuiltWith.tsx': BuiltWith,
}

export default function Content() {
  const fileName = useAppSelector((state) => state.data.currentFile.name);
  const prevFile = useAppSelector((state) => state.data.prevFile);
  const nextFile = useAppSelector((state) => state.data.nextFile);
  const Component = fileName ? FILES[fileName] : null;

  if (!Component) return null;

  return (
    <div
      className="flex flex-col items-center justify-between gap-[1rem] overflow-auto h-full w-full p-[1rem] bg-background dark:bg-dot-white/[0.1] bg-dot-black/[0.1]"
    >
      <PageLink
        file={prevFile}
        isPrev
      />
      <Component />
      <PageLink
        file={nextFile}
        isNext
      />
    </div>
  );
}