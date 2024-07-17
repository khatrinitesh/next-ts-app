"use client"
import Link from 'next/link';
import { constants } from './../app/constants/constants';
import { usePathname } from 'next/navigation';

interface Props {
  constants: Constants;
}

const navLinks = [
  { href: '/', label: 'title' },
  { href: '/about', label: 'about' },
  { href: '/service', label: 'service' },
  { href: '/contact', label: 'contact' },
];

const Header:React.FC<Props> = ({constants}) => {

  const pathname = usePathname();

  return (
    <header className='header bg-black '>
     <ul className='flex'>
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className={`text-white block px-6 py-2 ${pathname === link.href ? 'bg-gray-700' : ''}`}>{constants[link.label]}</Link>
          </li>
        ))}
      </ul>
    </header>
  )
}

export default Header