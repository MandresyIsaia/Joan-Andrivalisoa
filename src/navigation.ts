export const headerData = {
  links: [
    { text: 'Home', href: '/' },
    { text: 'Recruitment Process', href: '/process' },
    { text: 'Contact', href: '/contact' },
  ],
  actions: [{ text: 'Get in Touch', href: '/contact' }],
};

export const footerData = {
  links: [],
  secondaryLinks: [],
  socialLinks: [
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://linkedin.com/in/your-profile' },
    { ariaLabel: 'Email', icon: 'tabler:mail', href: 'mailto:your-email@example.com' },
  ],
  footNote: `© ${new Date().getFullYear()} Joan Andrivalisoa · All rights reserved.`,
};