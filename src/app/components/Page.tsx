import type { ReactNode } from 'react';
import PageTitle from '@/app/components/PageTitle';
import PageContent from '@/app/components/PageContent';

export default function Page({ children }: { children: ReactNode; }) {
  return (
    <div className="flex flex-col grow items-center justify-center gap-[2rem]">
      {children}
    </div>
  );
}

Page.Title = PageTitle;
Page.Content = PageContent;