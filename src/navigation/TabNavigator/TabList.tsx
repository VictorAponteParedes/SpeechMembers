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
      iconName: 'home',
      showLabel: true,
      headerShown: false,
    },
  },
  {
    name: Routes.PROFILE,
    component: ProfileTab,
    options: {
      title: 'Discursantes',
      iconName: 'mic',
      showLabel: true,
      headerShown: false,
    },
  },
  {
    name: Routes.MEMBERS,
    component: MemberTabs,
    options: {
      title: 'member',
      iconName: 'people',
      showLabel: true,
      headerShown: false,
    },
  },
];

export default TABS;
