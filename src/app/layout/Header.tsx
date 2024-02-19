import LanguageToggle from '@/app/layout/Header/LanguageToggle';
import MobileNav from '@/app/layout/Header/MobileNav';
import ModeToggle from '@/app/layout/Header/ModeToggle';

export default function Header() {
  return (
    <div className="flex justify-center gap-[0.5rem] p-[0.5rem] border-b">
      <MobileNav />
      <LanguageToggle />
      <ModeToggle />
    </div>
  );
}