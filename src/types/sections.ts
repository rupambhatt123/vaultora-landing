export interface HeaderNavLink {
  label: string;
  href: string;
  id: string;
}

export interface HeaderCtaButton {
  label: string;
  href: string;
}

export interface NavbarProps {
  data?: {
    logo: string;
    homeHref: string;
    homeAriaLabel: string;
    menuAriaLabel: string;
    navLinks: HeaderNavLink[];
    ctaButton: HeaderCtaButton;
  };
}

export interface HeroButtonItem {
  label: string;
  href: string;
  variant: "primary-gold" | "outline-light";
  hasArrow: boolean;
}

export interface HeroSectionProps {
  sectionId?: string;
  eyebrow?: string;
  headlinePrefix?: string;
  headlineHighlight?: string;
  description?: string;
  backgroundImage?: string;
  backgroundAlt?: string;
  buttons?: HeroButtonItem[];
}

export interface AboutSectionProps {
  sectionId?: string;
  eyebrow?: string;
  headlineLine1?: string;
  headlineHighlight?: string;
  summary?: string;
  points?: string[];
  yearsValue?: number;
  yearsLabel?: string;
  bigImage?: string;
  bigImageAlt?: string;
  smallImage?: string;
  smallImageAlt?: string;
}

export interface ServiceItemData {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ServicesSectionProps {
  sectionId?: string;
  badge?: string;
  titlePrefix?: string;
  titleHighlight?: string;
  description?: string;
  items?: ServiceItemData[];
}

export interface WhyChooseFeatureItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface WhyChooseUsSectionProps {
  sectionId?: string;
  badge?: string;
  titleLine1?: string;
  titleLine2Prefix?: string;
  titleHighlight?: string;
  subtitle?: string;
  features?: WhyChooseFeatureItem[];
}

export interface TeamMemberItem {
  id: string;
  name: string;
  role: string;
  image: string;
}

export interface TeamSectionProps {
  sectionId?: string;
  badge?: string;
  titlePrefix?: string;
  titleHighlight?: string;
  subtitle?: string;
  members?: TeamMemberItem[];
}

export interface TestimonialItem {
  id: string;
  quote: string;
  name: string;
  role: string;
  avatar: string;
}

export interface TestimonialsSectionProps {
  sectionId?: string;
  badge?: string;
  titlePrefix?: string;
  titleHighlight?: string;
  subtitle?: string;
  starCount?: number;
  prevAriaLabel?: string;
  nextAriaLabel?: string;
  items?: TestimonialItem[];
}

export interface ContactDetailItem {
  id: string;
  icon: string;
  label: string;
  value: string;
}

export interface ContactSectionProps {
  sectionId?: string;
  badge?: string;
  titlePrefix?: string;
  titleHighlight?: string;
  subtitle?: string;
  details?: ContactDetailItem[];
  form?: {
    namePlaceholder: string;
    emailPlaceholder: string;
    phonePlaceholder: string;
    subjectPlaceholder: string;
    messagePlaceholder: string;
  };
}

export interface FaqEntryItem {
  question: string;
  answer: string;
}

export interface FaqSectionProps {
  sectionId?: string;
  badge?: string;
  titlePrefix?: string;
  titleHighlight?: string;
  subtitle?: string;
  defaultOpenKey?: string;
  leftItems?: FaqEntryItem[];
  rightItems?: FaqEntryItem[];
}

export interface FooterLinkItem {
  label: string;
  href: string;
}

export interface FooterSectionProps {
  logo?: string;
  quickLinksHeading?: string;
  supportHeading?: string;
  contactHeading?: string;
  quickLinks?: FooterLinkItem[];
  supportLinks?: FooterLinkItem[];
  address?: string;
  phone?: string;
  email?: string;
  copyright?: string;
}

export const VAULT_THEME = {
  navy: "#0A1F4A",
  navyDeep: "#072242",
  navyBadge: "#0A2A52",
  gold: "#D4A63A",
  goldLight: "#F0CF7C",
  goldDeep: "#B58628",
  ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
  font: "'Montserrat', 'Poppins', system-ui, sans-serif",
};