import { useTranslation } from 'react-i18next';
import Page from '@/app/components/Page.tsx';
import Text from '@/app/components/Text.tsx';
import TechStack from '@/app/components/TechStack.tsx';
import useSkills from './useSkills.ts';

export default function Skills() {
  const { t } = useTranslation();
  const { data } = useSkills();

  return (
    <Page>
      <Page.Title>{t('skills.title')}</Page.Title>
      <div className="flex flex-col gap-[1.25rem]">
        { Object.entries(data).map(([name, value]) => (
          <div
            key={name}
            className="flex flex-col md:flex-row items-center justify-center gap-[1rem]"
          >
            { value.length > 0 && (
              <Text className="sm:w-[12rem]">{t(`skills.${name}`)}</Text>
            )}
            <TechStack
              className="flex-col justify-center sm:justify-normal"
              items={value}
            />
          </div>
        ))}
      </div>
    </Page>
  );
}