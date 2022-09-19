import Image from 'next/future/image';

import { links } from '../../consts/links';
import { BlockIndicator } from '../../features/blocks/BlockIndicator';
import Discord from '../../images/logos/discord.svg';
import Github from '../../images/logos/github.svg';
import Twitter from '../../images/logos/twitter.svg';

export function Footer() {
  return (
    <footer className="w-screen py-4 px-7">
      <div className="flex justify-between items-center">
        <div className="flex items-center opacity-90">
          <FooterIconLink to={links.twitter} imgSrc={Twitter} />
          <FooterIconLink to={links.github} imgSrc={Github} />
          <FooterIconLink to={links.discord} imgSrc={Discord} />
        </div>
        <BlockIndicator />
      </div>
    </footer>
  );
}

function FooterIconLink({
  to,
  imgSrc,
  last,
}: {
  to: string;
  imgSrc: any;
  last?: boolean;
}) {
  return (
    <a
      href={to}
      target="_blank"
      rel="noopener noreferrer"
      className={last ? '' : 'mr-5'}
    >
      <Image src={imgSrc} width={25} height={25} />
    </a>
  );
}
