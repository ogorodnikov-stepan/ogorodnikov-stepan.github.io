import { useTranslation } from 'react-i18next';
import { Button } from '@components/ui/button';
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger,
} from '@components/ui/dropdown-menu';
import { LANGUAGES } from '@app/App';

export default function LanguageToggle() {
  const { i18n } = useTranslation();

  const handleChange = (value: string) => {
    i18n.changeLanguage(value);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <img
            className="size-[1.2rem] "
            alt={LANGUAGES[i18n.language]}
            src={`images/languages/${i18n.language}.svg`}
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        { Object.keys(LANGUAGES).map((lang) => (
          <DropdownMenuItem
            key={lang}
            className="flex flex-row gap-2"
            onClick={() => handleChange(lang)}
          >
            <img
              className="size-[1.2rem] "
              alt={LANGUAGES[i18n.language]}
              src={`images/languages/${lang}.svg`}
            />
            {LANGUAGES[lang]}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}