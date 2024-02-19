import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import type { TFunction } from 'i18next';
import { useAppSelector, useAppDispatch } from '@/app/store/hooks';
import { dataCodeSet } from '@app/store/dataSlice';
import { scriptSet } from '@/app/store/codeSlice';

type HomeData = Record<string, string>;

const DATA = `{
  "firstName": "",
  "lastName": "",
  "avatar": "",
  "position": "",
  "github": ""
}`;

const SCRIPT = (t: TFunction) => ([
  { lookFor: '"firstName": "', type: t('home.firstName') },
  { lookFor: '"lastName": "', type: t('home.lastName') },
  { lookFor: '"avatar": "', paste: '/images/avatar.jpeg' },
  { lookFor: '"position": "', type: t('home.position') },
  { lookFor: '"github": "', paste: 'https://github.com/ogorodnikov-stepan' },
]);

export default function useHome() {
  const { t } = useTranslation();
  const data = <HomeData>useAppSelector((state) => state.data.componentData);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(dataCodeSet(DATA));
    dispatch(scriptSet(SCRIPT(t)));
  }, [dispatch, t]);

  return { data };
}