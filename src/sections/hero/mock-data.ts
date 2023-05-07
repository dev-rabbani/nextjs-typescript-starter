import { IHero } from './interface';

export const heroProps: IHero = {
  title:
    'Welcome to Nextjs typescript starter, the ultimate solution for building modern web applications with Next.js!',
  description:
    'Our starter template is designed to give you a head start on your project, with all the tools you need to create a beautiful and responsive web application in no time. With Next.js, you can enjoy the benefits of server-side rendering and a streamlined development process, while still having the flexibility to use the front-end framework of your choice',
  buttons: {
    buttonLeft: {
      label: 'Server Side Example',
      href: '/',
    },
    buttonRight: {
      label: 'Client Side Example',
      href: 'client-side',
    },
  },
};
