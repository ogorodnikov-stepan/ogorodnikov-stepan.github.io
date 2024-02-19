import { useTranslation } from 'react-i18next';
import Page from '@/app/components/Page.tsx';
import TextLine from '@/app/components/TextLine.tsx';
import Text from '@/app/components/Text.tsx';
import InlineCodeList from '@/app/components/InlineCodeList.tsx';
import useCSS from './useCSS.ts';

export default function CSS() {
  const { t } = useTranslation();
  const { data } = useCSS();

  return (
    <Page>
      <Page.Title>{t('css.title')}</Page.Title>
      <Page.Content>
        { data.responsive?.length > 0 && (
          <TextLine>
            <Text>{t('css.responsive')}</Text>
            <InlineCodeList items={data.responsive} />
          </TextLine>
        )}
        { data.layout?.length > 0 && (
          <TextLine>
            <InlineCodeList items={data.layout} />
            <Text>{t('css.layout')}</Text>
          </TextLine>
        )}
        { data.preprocessors?.length > 0 && (
          <TextLine>
            <InlineCodeList items={data.preprocessors} />
            <Text>{t('css.preprocessors')}</Text>
          </TextLine>
        )}
        { data.isolation?.length > 0 && (
          <TextLine>
            <Text>{t('css.isolation')}</Text>
            <InlineCodeList items={data.isolation} />
          </TextLine>
        )}
        { data.custom?.length > 0 && (
          <TextLine>
            <Text>{t('css.custom')}</Text>
            <InlineCodeList items={data.custom} />
            { data.libraries?.length > 0 && (
              <>
                <Text>{t('css.libraries')}</Text>
                <InlineCodeList items={data.libraries} />
              </>
            )}
          </TextLine>
        )}
      </Page.Content>
    </Page>
  );
}