import Image from 'next/image';

import { config } from '../../consts/config';
import Discord from '../../images/logos/discord.svg';
import Github from '../../images/logos/github.svg';
import Twitter from '../../images/logos/twitter.svg';

export function Footer() {
  return (
    <footer className="w-screen py-4 px-7">
      <div className="flex justify-between items-center">
        <div className="flex items-center opacity-90">
          <FooterIconLink
            to="https://twitter.com/Abacus_Network"
            imgSrc={Twitter}
            alt="Twitter"
          />
          <FooterIconLink
            to="https://github.com/abacus-network/abacus-nft"
            imgSrc={Github}
            alt="Github"
          />
          <FooterIconLink
            to={config.discordUrl}
            imgSrc={Discord}
            alt="Discord"
          />
        </div>
        <BlockIndicator />
      </div>
    </footer>
  );
}

function FooterIconLink({
  to,
  imgSrc,
  alt,
  last,
}: {
  to: string;
  imgSrc: any;
  alt: string;
  last?: boolean;
}) {
  return (
    <a
      href={to}
      target="_blank"
      rel="noopener noreferrer"
      className={last ? '' : 'mr-5'}
    >
      <Image src={imgSrc} alt={alt} width={25} height={25} />
    </a>
  );
}

function BlockIndicator() {
  const classColor = 'green';
  const summary = 'Connected';
  return (
    <button
      className="flex items-center hover:underline"
      // onClick={/* TODO */}
    >
      <div className="mr-3 text-sm font-medium pt-px">{summary}</div>
      <div
        className={`rounded-full w-3.5 h-3.5 ${'bg-' + classColor} border-2 ${
          'border-' + classColor
        } border-opacity-50`}
      ></div>
      <div className="hidden bg-yellow-300 bg-red-600"></div>
    </button>
  );
}
