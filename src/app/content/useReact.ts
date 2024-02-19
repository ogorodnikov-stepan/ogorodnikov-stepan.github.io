import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '@/app/store/hooks';
import { dataCodeSet } from '@app/store/dataSlice';
import { scriptSet } from '@/app/store/codeSlice';

type ReactData = Record<string, string[]>;

const DATA = `{
  "bundlers": [],
  "testing": [],
  "state": [],
  "i18n": []
}`;

const SCRIPT = [
  { lookFor: '"bundlers": [', paste: '""' },
  { lookFor: '"bundlers": ["', type: 'webpack' },
  { lookFor: '"testing": [', paste: '""' },
  { lookFor: '"testing": ["', type: 'jest' },
  { lookFor: '"state": [', paste: '""' },
  { lookFor: '"state": ["', type: 'redux-toolkit' },
  { lookFor: '"redux-toolkit"', paste: ', ""' },
  { lookFor: '"redux-toolkit", "', type: 'react-query' },
  { lookFor: '"react-query"', paste: ', ""' },
  { lookFor: '"react-query", "', type: 'zustand' },
  { lookFor: '"i18n": [', paste: '""' },
  { lookFor: '"i18n": ["', type: 'i18next' },
];

export default function useReact() {
  const data = <ReactData>useAppSelector((state) => state.data.componentData);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(dataCodeSet(DATA));
    dispatch(scriptSet(SCRIPT));
  }, [dispatch]);

  return { data };
}