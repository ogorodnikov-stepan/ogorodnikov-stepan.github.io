import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '@/app/store/hooks';
import { dataCodeSet } from '@app/store/dataSlice';
import { scriptSet } from '@/app/store/codeSlice';

type BuiltWithData = Record<string, string[]>;

const DATA = `{
  "stack": []
}`;

const SCRIPT = [
  { lookFor: '"stack": [', paste: '""' },
  { lookFor: '"stack": ["', type: 'TypeScript' },
  { lookFor: '"TypeScript"', paste: ', ""' },
  { lookFor: '"TypeScript", "', type: 'Astro' },
  { lookFor: '"Astro"', paste: ', ""' },
  { lookFor: '"Astro", "', type: 'React' },
  { lookFor: '"React"', paste: ', ""' },
  { lookFor: '"React", "', type: 'Redux Toolkit' },
  { lookFor: '"Redux Toolkit"', paste: ', ""' },
  { lookFor: '"Redux Toolkit", "', type: 'Tailwind CSS' },
  { lookFor: '"Tailwind CSS"', paste: ', ""' },
  { lookFor: '"Tailwind CSS", "', type: 'shadcn/ui' },
];

export default function useBuiltWith() {
  const data = <BuiltWithData>useAppSelector((state) => state.data.componentData);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(dataCodeSet(DATA));
    dispatch(scriptSet(SCRIPT));
  }, [dispatch]);

  return { data };
}