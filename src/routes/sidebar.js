import {
  FiGrid,
  FiShoppingBag,
  FiUsers,
  FiUser,
  FiCompass,
  FiGift,
  FiList,
  FiSettings,
} from 'react-icons/fi';
import UserRole from '../hooks/UserRole';
/**
 * ⚠ These are used just to render the Sidebar!
 * You can include any link here, local or external.
 *
 * If you're looking to actual Router routes, go to
 * `routes/index.js`
 */
const sidebar = [
  {
    path: '/dashboard', // the url
    icon: FiGrid, // icon
    name: 'Dashboard', // name that appear in Sidebar
    userRole: UserRole.superAdmin(),
  },
  {
    path: '/products',
    icon: FiShoppingBag,
    name: 'Products',
    userRole: UserRole.superAdmin(),
  },
  {
    path: '/category',
    icon: FiList,
    name: 'Category',
    userRole: UserRole.merchant(),
  },
  {
    path: '/orders',
    icon: FiCompass,
    name: 'Orders',
    userRole: UserRole.manager(),
  },

  {
    icon: FiSettings,
    name: 'Pickup',
    userRole: UserRole.noRole(),
    routes: [
      {
        path: '/orders',
        icon: FiGift,
        name: 'Orders',
      },
      {
        path: '/category',
        icon: FiGift,
        name: 'Pickup',
      }
    ],
  },

  {
    path: '/coupons',
    icon: FiGift,
    name: 'Coupons',
    userRole: UserRole.rider(),
  },

  {
    path: '/pickup-location',
    icon: FiGift,
    name: 'Pickup Location',
    userRole: UserRole.merchant(),
  },

  {
    icon: FiSettings,
    name: 'Courier Settings',
    userRole: UserRole.superAdmin(),
    routes: [
      {
        path: '/districts',
        icon: FiGift,
        name: 'Districts',
      },
      {
        path: '/zones',
        icon: FiGift,
        name: 'Zones',
      },
      {
        path: '/areas',
        icon: FiGift,
        name: 'Areas',
      },
      {
        path: '/producttypes',
        icon: FiGift,
        name: 'Product types',
      },
      {
        path: '/servicetypes',
        icon: FiGift,
        name: 'Service types',
      },
      {
        path: '/weights',
        icon: FiGift,
        name: 'Weights',
      },
      {
        path: '/ridercosts',
        icon: FiGift,
        name: 'Rider fee',
      },
      {
        path: '/merchantcosts',
        icon: FiGift,
        name: 'Merchant fee',
      },
      {
        path: '/hubs',
        icon: FiGift,
        name: 'Hubs',
      }
    ],
  },
  {
    path: '/merchants',
    icon: FiUsers,
    name: 'Merchants',
    userRole: UserRole.merchant(),
  },
  {
    path: '/our-rider',
    icon: FiUser,
    name: 'Our Rider',
    userRole: UserRole.rider(),
  },
  {
    path: '/setting',
    icon: FiSettings,
    name: 'Setting',
    userRole: UserRole.noRole(),
  }

];

export default sidebar;
