import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '@/app/store/hooks';
import { dataCodeSet } from '@app/store/dataSlice';
import { scriptSet } from '@/app/store/codeSlice';

type CSSData = Record<string, string[]>;

const DATA = `{
  "responsive": [],
  "layout": [],
  "preprocessors": [],
  "isolation": [],
  "custom": [],
  "libraries": []
}`;

const SCRIPT = [
  { lookFor: '"responsive": [', paste: '""' },
  { lookFor: '"responsive": ["', type: 'media queries' },
  { lookFor: '"layout": [', paste: '""' },
  { lookFor: '"layout": ["', type: 'flexbox' },
  { lookFor: '"flexbox"', paste: ', ""' },
  { lookFor: '"flexbox", "', type: 'grid' },
  { lookFor: '"preprocessors": [', paste: '""' },
  { lookFor: '"preprocessors": ["', type: 'Sass' },
  { lookFor: '"isolation": [', paste: '""' },
  { lookFor: '"isolation": ["', type: 'BEM' },
  { lookFor: '"BEM"', paste: ', ""' },
  { lookFor: '"BEM", "', type: 'tailwind' },
  { lookFor: '"custom": [', paste: '""' },
  { lookFor: '"custom": ["', type: 'normalize.css' },
  { lookFor: '"libraries": [', paste: '""' },
  { lookFor: '"libraries": ["', type: 'bootstrap' },
  { lookFor: '"bootstrap"', paste: ', ""' },
  { lookFor: '"bootstrap", "', type: 'shadcn/ui' },
];

export default function useCSS() {
  const data = <CSSData>useAppSelector((state) => state.data.componentData);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(dataCodeSet(DATA));
    dispatch(scriptSet(SCRIPT));
  }, [dispatch]);

  return { data };
}