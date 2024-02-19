import { useTranslation } from 'react-i18next';
import Page from '@/app/components/Page.tsx';
import TextLine from '@/app/components/TextLine.tsx';
import Text from '@/app/components/Text.tsx';
import InlineCodeList from '@/app/components/InlineCodeList.tsx';
import useReact from './useReact.ts';

export default function React() {
  const { t } = useTranslation();
  const { data } = useReact();

  return (
    <Page>
      <Page.Title>{t('react.title')}</Page.Title>
      <Page.Content>
        { Object.keys(data).map((category) => (
          (data[category]?.length > 0) && (
            <TextLine key={category}>
              <Text>{t(`react.${category}`)}</Text>
              <InlineCodeList items={data[category]} />
            </TextLine>
          )
        ))}
      </Page.Content>
    </Page>
  );
}