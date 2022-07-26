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
  },
  {
    path: '/products',
    icon: FiShoppingBag,
    name: 'Products',
  },
  {
    path: '/category',
    icon: FiList,
    name: 'Category',
  },
  {
    path: '/orders',
    icon: FiCompass,
    name: 'Orders',
  },

  {
    icon: FiSettings,
    name: 'Pickup',
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
  },

  {
    icon: FiSettings,
    name: 'products',
    routes: [
      {
        path: '/products',
        icon: FiGift,
        name: 'Login',
      },
      {
        path: '/category',
        icon: FiGift,
        name: 'Pickup',
      }
    ],
  },
  {
    path: '/merchants',
    icon: FiUsers,
    name: 'Merchants',
  },
  {
    path: '/our-rider',
    icon: FiUser,
    name: 'Our Rider',
  },
  {
    path: '/setting',
    icon: FiSettings,
    name: 'Setting',
  }

];

export default sidebar;
