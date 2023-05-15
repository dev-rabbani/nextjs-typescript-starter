interface MenuItem {
  label: string;
  href: string;
}

export interface IHeader {
  logo: string;
  menuItems: MenuItem[];
}
