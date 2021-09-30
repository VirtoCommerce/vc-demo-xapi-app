export const dashboardContent: DashboardContentType = [
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
        link: '/companies/current',
        caption: 'COMPANY EDIT',
        description: 'Company edit script demo',
      },
      {
        link: '/addresses',
        caption: 'COMPANY ADDRESSES',
        description: 'Company addresses script demo',
      },
      {
        link: '/companies',
        caption: 'COMPANIES LISTING',
        description: 'Companies listing script demo',
      },
    ],
  },
  {
    header: 'CHECKOUT & ORDERS',
    iconSrc: '../../../assets/images/dash-checkout.svg',
    content: [
      {
        link: '/checkout',
        caption: 'CHECKOUT',
        description: 'Checkout script demo',
      },
      {
        link: '/orders',
        caption: 'ORDERS',
        description: 'Orders script demo',
      },
      {
        link: '/payments',
        caption: 'PAYMENTS',
        description: 'Payments demo',
      },
    ],
  },
  {
    header: 'MEMBERS',
    iconSrc: '../../../assets/images/dash-member.svg',
    content: [
      {
        link: '/members/members-list',
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

export interface DashboardSectionType {
  header: string;
  iconSrc: string;
  content: {
      link: string;
      caption: string;
      description: string;
  }[];
}
