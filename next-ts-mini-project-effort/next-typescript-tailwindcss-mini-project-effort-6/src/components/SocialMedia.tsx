import { socialMediaLinks } from '@/constants/constants';
import Link from 'next/link';
import React from 'react';

const SocialMediaComp: React.FC = () => {
    return (
      <div className="social-media-links">
        <ul className="flex gap-4 text-center items-center justify-center">
        {socialMediaLinks.map(({ label, url, Icon }) => (
            <li key={label}>
          <Link  href={url} target="_blank" rel="noopener noreferrer" aria-label={label}>
            <Icon className="mx-auto block" size={24} />
            <span className="hidden">{label}</span>
          </Link>
          </li>
        ))}
        </ul>
      </div>
    );
  };

export default SocialMediaComp;
