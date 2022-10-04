import React, { useContext } from 'react';
import { NavLink, Route } from 'react-router-dom';
import SidebarSubmenu from './SidebarSubmenu'
import Cookies from 'js-cookie';
import { Button, WindmillContext } from '@windmill/react-ui';
import { IoLogOutOutline } from 'react-icons/io5';
import logoDark from '../../assets/img/logo/logo-dark.svg';
import logoLight from '../../assets/img/logo/logo-light.svg';

import sidebar from '../../routes/sidebar';
import { AdminContext } from '../../context/AdminContext';

const SidebarContent = () => {
  const { mode } = useContext(WindmillContext);
  const { dispatch, state } = useContext(AdminContext);
  const { adminInfo } = state;
  const currentRole = adminInfo?.user?.user_role ? adminInfo.user.user_role : '';
  const handleLogOut = () => {
    dispatch({ type: 'USER_LOGOUT' });
    Cookies.remove('adminInfo');
  };

  const sidbarMenu = (route) => {
      const canAccess = route.userRole.includes(currentRole);
      if(!canAccess){
        return '';
      }


      return route.routes ? (
        <SidebarSubmenu route={route} key={route.name} />
      ) :
      (
        <li className="relative" key={route.name}>
          <NavLink
            exact
            to={route.path}
            className="px-6 py-4 inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-green-700 dark:hover:text-gray-200"
            activeClassName="text-green-500 dark:text-gray-100"
          >
            <Route path={route.path} exact={route.exact}>
              <span
                className="absolute inset-y-0 left-0 w-1 bg-green-500 rounded-tr-lg rounded-br-lg"
                aria-hidden="true"
              ></span>
            </Route>
            <route.icon className="w-5 h-5" aria-hidden="true" />
            <span className="ml-4">{route.name}</span>
          </NavLink>
        </li>
      )
  }
  return (
    <div className="py-4 text-gray-500 dark:text-gray-400">
      <a className=" text-gray-900 dark:text-gray-200" href="/dashboard">
        {mode === 'dark' ? (
          <img src={logoLight} alt="deliveryexpertbd" width="135" className="pl-6" />
        ) : (
          <img src={logoDark} alt="deliveryexpertbd" width="135" className="pl-6" />
        )}
      </a>
      <ul className="mt-8">
        {
          sidebar.map((route) => sidbarMenu(route) ) }
      </ul>
      <span className="lg:fixed bottom-0 px-6 py-6 w-64 mx-auto relative mt-3 block">
        <Button onClick={handleLogOut} size="large" className="w-full">
          <span className="flex items-center">
            <IoLogOutOutline className="mr-3 text-lg" />
            <span className="text-sm">Log out</span>
          </span>
        </Button>
      </span>
    </div>
  );
};

export default SidebarContent;
