import { lazy } from 'react';

// use lazy for better code splitting
const Dashboard = lazy(() => import('../pages/Dashboard'));
const Products = lazy(() => import('../pages/Products'));
const ProductDetails = lazy(() => import('../pages/ProductDetails'));
const Category = lazy(() => import('../pages/Category'));
const Rider = lazy(() => import('../pages/Rider'));
const Merchants = lazy(() => import('../pages/Merchants'));
const CustomerOrder = lazy(() => import('../pages/CustomerOrder'));
const Orders = lazy(() => import('../pages/Orders'));
const OrderInvoice = lazy(() => import('../pages/OrderInvoice'));
const Coupons = lazy(() => import('../pages/Coupons'));
const Districts = lazy(() => import('../pages/Districts'));
// const Setting = lazy(() => import("../pages/Setting"));
const Page404 = lazy(() => import('../pages/404'));
const EditProfile = lazy(() => import('../pages/EditProfile'));

/*
//  * ⚠ These are internal routes!
//  * They will be rendered inside the app, using the default `containers/Layout`.
//  * If you want to add a route to, let's say, a landing page, you should add
//  * it to the `App`'s router, exactly like `Login`, `CreateAccount` and other pages
//  * are routed.
//  *
//  * If you're looking for the links rendered in the SidebarContent, go to
//  * `routes/sidebar.js`
 */

const routes = [
  {
    path: '/dashboard',
    component: Dashboard,
  },
  {
    path: '/products',
    component: Products,
  },
  {
    path: '/product/:id',
    component: ProductDetails,
  },
  {
    path: '/category',
    component: Category,
  },
  {
    path: '/merchants',
    component: Merchants,
  },
  {
    path: '/customer-order/:id',
    component: CustomerOrder,
  },
  {
    path: '/our-rider',
    component: Rider,
  },
  {
    path: '/orders',
    component: Orders,
  },
  {
    path: '/order/:id',
    component: OrderInvoice,
  },
  {
    path: '/coupons',
    component: Coupons,
  },
  {
    path: '/districts',
    component: Districts,
  },
  { path: '/setting', component: EditProfile },
  {
    path: '/404',
    component: Page404,
  },
  {
    path: '/edit-profile',
    component: EditProfile,
  },
];

export default routes;
