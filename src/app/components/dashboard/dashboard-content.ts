export const dashboardContent = [
  {
    header: 'LOGIN & REGISTRATION',
    iconSrc: '../../../assets/images/dash-login.svg',
    content: [
      {
        link: '/login',
        caption: 'LOGIN',
        description: 'Login script demo',
      },
      {
        link: '/registration',
        caption: 'REGISTRATION',
        description: 'Registration script demo',
      },
    ],
  },
  {
    header: 'COMPANY',
    iconSrc: '../../../assets/images/dash-company.svg',
    content: [
      {
        link: '/company-edit',
        caption: 'COMPANY EDIT',
        description: 'Company edit script demo',
      },
      {
        link: '/company-addresses',
        caption: 'COMPANY ADDRESSES',
        description: 'Company addresses script demo',
      },
      {
        link: '/companies-listing',
        caption: 'COMPANIES LISTING',
        description: 'Companies listing script demo',
      },
    ],
  },
  {
    header: 'CHECKOUT',
    iconSrc: '../../../assets/images/dash-checkout.svg',
    content: [
      {
        link: '/checkout',
        caption: 'CHECKOUT',
        description: 'Checkout script demo',
      },
    ],
  },
  {
    header: 'MEMBERS',
    iconSrc: '../../../assets/images/dash-member.svg',
    content: [
      {
        link: '/members-list',
        caption: 'MEMBERS LIST',
        description: 'Members list script demo',
      },
      {
        link: '/members-list',
        caption: 'MEMBERS LIST',
        description: 'A brief description of functionality',
      },
    ],
  },
];

export type DashboardContentType = {
  header: string;
  iconSrc: string;
  content: {
      link: string;
      caption: string;
      description: string;
  }[];
}[];

export type DashboardSectionType = {
  header: string;
  iconSrc: string;
  content: {
      link: string;
      caption: string;
      description: string;
  }[];
};
