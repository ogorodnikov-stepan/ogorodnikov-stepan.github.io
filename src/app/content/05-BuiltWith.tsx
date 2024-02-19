import { useTranslation } from 'react-i18next';
import Page from '@/app/components/Page.tsx';
import TechStack from '@/app/components/TechStack.tsx';
import useBuiltWith from './useBuiltWith.ts';

export default function BuiltWith() {
  const { t } = useTranslation();
  const { data } = useBuiltWith();

  return (
    <Page>
      <Page.Title>{t('builtWith.title')}</Page.Title>
      <div className="flex flex-col gap-[1.25rem] w-[24rem]">
        { data.stack && (
          <TechStack
            className="justify-center"
            items={data.stack}
          />
        )}
      </div>
    </Page>
  );
}