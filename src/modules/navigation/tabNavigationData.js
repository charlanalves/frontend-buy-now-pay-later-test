import HomeScreen from '../home/HomeViewContainer';
import ListCustomers from '../customers/ListCustomers';
const iconHome = require('../../../assets/images/tabbar/home.png');
const iconPages = require('../../../assets/images/tabbar/pages.png');
const tabNavigationData = [
  {
    name: 'Home',
    component: HomeScreen,
    icon: iconHome,
  },
  {
    name: 'Customers',
    component: ListCustomers,
    icon: iconPages,
  },
];

export default tabNavigationData;