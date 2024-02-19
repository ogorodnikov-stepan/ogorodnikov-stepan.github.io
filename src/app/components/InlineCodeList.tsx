import InlineCode from '@/app/components/InlineCode';

export default function InlineCodeList({ items }: { items: string[]; }) {
  return (
    <ul className="flex flex-row gap-[1rem]">
      { items.map((item) => (
        <li key={item} >
          <InlineCode>{item}</InlineCode>
        </li>
      ))}
    </ul>
  );
}