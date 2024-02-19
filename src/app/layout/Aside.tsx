import Header from '@/app/layout/Header';
import Nav from '@/app/layout/Nav';

export default function Aside() {
  return (
    <aside className="sm:h-full w-full bg-alternative">
      <Header />
      <Nav />
    </aside>
  );
}