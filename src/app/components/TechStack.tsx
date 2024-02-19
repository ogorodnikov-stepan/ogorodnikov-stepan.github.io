import { ReactSVG } from 'react-svg';
import { cn } from '@/lib/utils';

interface Props {
  className?: string;
  items: string[];
}

export default function TechStack({ className, items }: Props) {
  return (
    <ul className={cn(className, 'flex flex-row flex-wrap grow gap-[0.5rem] min-h-[5rem]')}>
      { items.map((item) => (
        <li
          key={item}
          className="flex flex-col items-center gap-[0.5rem] min-w-[7rem] p-[0.5rem] rounded hover:bg-secondary"
        >
          { item && (
            <ReactSVG
              className="h-[2rem] w-[2rem] fill-current"
              src={`images/logos/${item.replace('/', '').replace(' ', '-').toLowerCase()}.svg`}
            />
            )}
          <span className="font-medium">
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}