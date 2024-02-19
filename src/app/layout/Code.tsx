import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneLight, atomOneDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import { useAppSelector } from '@app/store/hooks';

interface Props {
  source: 'data' | 'component';
}

export default function Code({ source }: Props) {
  const isDark = useAppSelector((state) => state.app.isDark);
  const code = useAppSelector((state) => state.data.componentCode);
  const { prefix, suffix, typing } = useAppSelector((state) => state.code);

  return (
    <SyntaxHighlighter
      className="h-full"
      language={source === 'data' ? 'json' : 'javascript'}
      style={isDark ? atomOneDark :atomOneLight}
    >
      {source === 'data' ? (prefix + typing + suffix) : code}
    </SyntaxHighlighter>
  );
}