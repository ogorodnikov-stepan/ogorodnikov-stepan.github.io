import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Sun, Moon } from 'lucide-react';
import { Button } from '@components/ui/button';
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger,
} from '@components/ui/dropdown-menu';
import { useAppSelector, useAppDispatch } from '@/app/store/hooks';
import { themeSet } from '@/app/store/appSlice';

export default function ModeToggle() {
  const { t } = useTranslation();
  const theme = useAppSelector((state) => state.app.theme);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains('dark');
    dispatch(themeSet(isDarkMode ? 'dark' : 'theme-light'));
  }, [dispatch]);

  useEffect(() => {
    const isDark =
      (theme === 'dark') ||
      (theme === 'system' &&
        window.matchMedia('(prefers-color-scheme: dark)').matches);
    document.documentElement.classList[isDark ? 'add' : 'remove']('dark');
  }, [theme]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Sun className="size-[1.25rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute size-[1.25rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => dispatch(themeSet("theme-light"))}>
          {t('app.theme.light')}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => dispatch(themeSet("dark"))}>
          {t('app.theme.dark')}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => dispatch(themeSet("system"))}>
          {t('app.theme.system')}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}