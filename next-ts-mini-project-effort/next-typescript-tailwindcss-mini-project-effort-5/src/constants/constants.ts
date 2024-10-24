import { HeaderProps, Option, SocialMedia } from "@/types";
import { FaFacebook, FaLinkedin, FaYoutube } from 'react-icons/fa';

export const headerData:HeaderProps[] = [
    {label:'Home',url:'/'},
    {label:'About',url:'/about'},
    {label:'Service',url:'/service'},
    {label:'Contact',url:'/contact'},
]

export const socialMediaLinks: SocialMedia[] = [
    {
      label: 'Facebook',
      url: 'https://facebook.com/yourprofile',
      Icon: FaFacebook,
    },
    {
      label: 'LinkedIn',
      url: 'https://linkedin.com/in/yourprofile',
      Icon: FaLinkedin,
    },
    {
      label: 'YouTube',
      url: 'https://youtube.com/c/yourchannel',
      Icon: FaYoutube,
    },
  ];

  export const months: Option[] = [
    { value: 'hide', label: '-- Month --' },
    { value: 'january', label: 'January' },
    { value: 'february', label: 'February' },
    { value: 'march', label: 'March' },
    { value: 'april', label: 'April' },
    { value: 'may', label: 'May' },
    { value: 'june', label: 'June' },
    { value: 'july', label: 'July' },
    { value: 'august', label: 'August' },
    { value: 'september', label: 'September' },
    { value: 'october', label: 'October' },
    { value: 'november', label: 'November' },
    { value: 'december', label: 'December' },
  ];

  export const years: Option[] = [
    { value: 'hide', label: '-- Year --' },
    { value: '2020', label: '2020' },
    { value: '2021', label: '2021' },
    { value: '2022', label: '2022' },
    { value: '2023', label: '2023' },
    { value: '2024', label: '2024' },
    { value: '2025', label: '2025' },
  ];