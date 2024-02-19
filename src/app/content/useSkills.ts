import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '@/app/store/hooks';
import { dataCodeSet } from '@app/store/dataSlice';
import { scriptSet } from '@/app/store/codeSlice';

type SkillsData = Record<string, string[]>;

const DATA = `{
  "fundamentals": [],
  "current": [],
  "legacy": []
}`;

const SCRIPT = [
  { lookFor: '"fundamentals": [', paste: '""' },
  { lookFor: '"fundamentals": ["', type: 'HTML' },
  { lookFor: '"HTML"', paste: ', ""' },
  { lookFor: '"HTML", "', type: 'CSS' },
  { lookFor: '"CSS"', paste: ', ""' },
  { lookFor: '"CSS", "', type: 'JavaScript' },
  { lookFor: '"JavaScript"', paste: ', ""' },
  { lookFor: '"JavaScript", "', type: 'Git' },
  { lookFor: '"current": [', paste: '""' },
  { lookFor: '"current": ["', type: 'TypeScript' },
  { lookFor: '"TypeScript"', paste: ', ""' },
  { lookFor: '"TypeScript", "', type: 'React' },
  { lookFor: '"legacy": [', paste: '""' },
  { lookFor: '"legacy": ["', type: 'jQuery' },
  { lookFor: '"jQuery"', paste: ', ""' },
  { lookFor: '"jQuery", "', type: 'PHP' },
  { lookFor: '"PHP"', paste: ', ""' },
  { lookFor: '"PHP", "', type: 'Drupal' },
];

export default function useSkills() {
  const data = <SkillsData>useAppSelector((state) => state.data.componentData);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(dataCodeSet(DATA));
    dispatch(scriptSet(SCRIPT));
  }, [dispatch]);

  return { data };
}