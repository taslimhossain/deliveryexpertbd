import { lazy } from 'react';
import UserRole from '../hooks/UserRole';
import Areas from '../pages/Areas';
import Hub from '../pages/Hub';
import Merchantcost from '../pages/Merchantcost';
import PickupLocation from '../pages/PickupLocation';
import ProductType from '../pages/ProductType';
import Ridercost from '../pages/Ridercost';
import ServiceType from '../pages/ServiceType';
import Weight from '../pages/Weight';
import ZoneinHub from '../pages/ZoneinHub';
import Zones from '../pages/Zones';

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
    userRole: UserRole.superAdmin(),
  },
  {
    path: '/products',
    component: Products,
    userRole: UserRole.superAdmin(),
  },
  {
    path: '/product/:id',
    component: ProductDetails,
    userRole: UserRole.noRole(),
  },
  {
    path: '/category',
    component: Category,
    userRole: UserRole.merchant(),
  },
  {
    path: '/merchants',
    component: Merchants,
    userRole: UserRole.merchant(),
  },
  {
    path: '/customer-order/:id',
    component: CustomerOrder,
    userRole: UserRole.noRole(),
  },
  {
    path: '/our-rider',
    component: Rider,
    userRole: UserRole.rider(),
  },
  {
    path: '/orders',
    component: Orders,
    userRole: UserRole.manager(),
  },
  {
    path: '/order/:id',
    component: OrderInvoice,
    userRole: UserRole.noRole(),
  },
  {
    path: '/coupons',
    component: Coupons,
    userRole: UserRole.rider(),
  },
  {
    path: '/pickup-location',
    component: PickupLocation,
    userRole: UserRole.merchant(),
  },
  {
    path: '/districts',
    component: Districts,
    userRole: UserRole.superAdmin(),
  },
  {
    path: '/zones',
    component: Zones,
    userRole: UserRole.superAdmin(),
  },
  {
    path: '/areas',
    component: Areas,
    userRole: UserRole.superAdmin(),
  },
  {
    path: '/producttypes',
    component: ProductType,
    userRole: UserRole.superAdmin(),
  },
  {
    path: '/servicetypes',
    component: ServiceType,
    userRole: UserRole.superAdmin(),
  },
  {
    path: '/weights',
    component: Weight,
    userRole: UserRole.superAdmin(),
  },
  {
    path: '/merchantcosts',
    component: Merchantcost,
    userRole: UserRole.superAdmin(),
  },
  {
    path: '/ridercosts',
    component: Ridercost,
    userRole: UserRole.superAdmin(),
  },
  {
    path: '/hubs',
    component: Hub,
    userRole: UserRole.superAdmin(),
  },
  {
    path: '/zoneinhub',
    component: ZoneinHub,
    userRole: UserRole.superAdmin(),
  },
  { 
    path: '/setting', 
    component: EditProfile,
    userRole: UserRole.superAdmin(),
  },
  {
    path: '/404',
    component: Page404,
    userRole: UserRole.noRole(),
  },
  {
    path: '/edit-profile',
    component: EditProfile,
    userRole: UserRole.noRole(),
  },
];

export default routes;
