import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { GitHubLogoIcon } from '@radix-ui/react-icons';
import { Card } from '@/components/ui/card.tsx';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar.tsx';
import { Link } from '@/components/ui/link.tsx';
import Page from '@/app/components/Page.tsx';
import useHome from './useHome.ts';

export default function Home() {
  const { t } = useTranslation();
  const { data: {
    avatar, firstName, lastName, position, github,
  } } = useHome();

  return (
    <Page>
      <Card className="flex flex-col items-center gap-[1rem] w-full sm:w-[22rem] h-80 m-[1rem] p-[2rem]">
        <Avatar className="w-24 h-24">
          <AvatarImage className="shadow-sm" src={avatar} />
          <AvatarFallback />
        </Avatar>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center gap-2">
            <span className="text-2xl font-bold">
              {`${firstName || ''} ${lastName || ''}`}
            </span>
            <span className="text-xl font-normal">
              {position || ''}
            </span>
          </div>
          { github && (
            <Link
              variant="secondary"
              href={github}
              target="_blank"
            >
              <GitHubLogoIcon className="mr-[0.5rem] h-[1.125rem] w-[1.125rem]" />
              {t('home.github')}
            </Link>
          )}
        </div>
      </Card>
    </Page>
  );
}