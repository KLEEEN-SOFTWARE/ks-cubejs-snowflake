import { NavigationSettings } from './navigation.model';

export const getSettings = (logout: () => void): NavigationSettings => {
  return {
    accountMenuOptions: [
      {
        title: 'User Preferences',
        path: '/profile/endUserPreferences/edit',
      },
      {
        title: 'Logout',
        path: '/logout',
        func: logout,
      },
    ],
    helpUrl: ``,
    logo: `assets/logo.png`,
    menuOptions: [
      {
        title: `Sales`,
        path: `/sales`,
        icon: `ks-navigation-6JE7dopQ3vf1NeEPdY3FF8`,
        type: `workflow`,
        openInNewTab: false,
        areYouSure: false,
      },
      {
        title: `Customers`,
        path: `/customers`,
        icon: `ks-navigation-bBxSvc34ogzZgRyWzodPQm`,
        type: `workflow`,
        openInNewTab: false,
        areYouSure: false,
      },
      {
        title: `Items & Inventory`,
        path: `/items-inventory`,
        icon: `ks-navigation-1eVebFHpR9c1AgCdfdFd1L`,
        type: `workflow`,
        openInNewTab: false,
        areYouSure: false,
      },
      {
        title: `Overview`,
        path: `/overview`,
        icon: `ks-navigation-fGYVSj8zMxkRWdooXEAN3C`,
        type: `workflow`,
        openInNewTab: false,
        areYouSure: false,
      },
    ],
  };
};
