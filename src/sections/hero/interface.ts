interface Button {
  label: string;
  href: string;
}

export interface HeroProps {
  title: string;
  description: string;
  buttons: {
    buttonLeft: Button;
    buttonRight: Button;
  };
}
