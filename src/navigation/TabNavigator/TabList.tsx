import HomeTab from './Tabs/Home';
import MemberTabs from './Tabs/Member';
import ProfileTab from './Tabs/Profile';
import Routes from '../routes';

const TABS = [
  {
    name: Routes.HOME,
    component: HomeTab,
    options: {
      title: 'home',
      iconName: 'homeLogo',
      showLabel: true,
      headerShown: false,
    },
  },
  {
    name: Routes.PROFILE,
    component: ProfileTab,
    options: {
      title: 'profile',
      iconName: 'profileLogo',
      showLabel: true,
      headerShown: false,
    },
  },
  {
    name: Routes.MEMBERS,
    component: MemberTabs,
    options: {
      title: 'member',
      iconName: 'memberLogo',
      showLabel: true,
      headerShown: false,
    },
  },
];

export default TABS;
