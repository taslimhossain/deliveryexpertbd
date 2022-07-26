import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Transition } from '@windmill/react-ui'
import { FiChevronDown } from 'react-icons/fi';

function SidebarSubmenu({ route }) {
    const [isDropdownMenuOpen, setIsDropdownMenuOpen] = useState(false)
    function handleDropdownMenuClick(rname) {
        setIsDropdownMenuOpen(!isDropdownMenuOpen)
    }
    const activeClass = isDropdownMenuOpen === true ? 'inline-flex items-center justify-between w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 text-green-500 dark:text-gray-100' : 'inline-flex items-center justify-between w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200';

  return (
    <li className="relative px-6 py-3" key={route.name}>
      <button className={activeClass}
        onClick={() => {handleDropdownMenuClick(route.name)} }
        aria-haspopup="true" >
        <span className="inline-flex items-center">
            <route.icon className="w-5 h-5" aria-hidden="true" />
            <span className="ml-4">{route.name}</span>
        </span>
        <FiChevronDown className="w-4 h-4" aria-hidden="true" />
      </button>
      <Transition
        show={isDropdownMenuOpen}
        enter="transition-all ease-in-out duration-300"
        enterFrom="opacity-25 max-h-0"
        enterTo="opacity-100 max-h-xl"
        leave="transition-all ease-in-out duration-300"
        leaveFrom="opacity-100 max-h-xl"
        leaveTo="opacity-0 max-h-0"
      >
        <ul
          className="p-2 mt-2 space-y-2 overflow-hidden text-sm font-medium text-gray-500 rounded-md shadow-inner bg-gray-50 dark:text-gray-400 dark:bg-gray-900"
          aria-label="submenu"
        >
          {route.routes.map((r) => (
            <li className="relative" key={r.name}>
                <NavLink exact to={r.path} className="px-2 py-1 inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-green-700 dark:hover:text-gray-200" activeClassName="text-green-500 dark:text-gray-100">

                { <r.icon className="w-5 h-5" aria-hidden="true" />}
                <span className="ml-4">{r.name}</span>
                </NavLink>
            </li>
          ))}
        </ul>
      </Transition>
    </li>
  )
}

export default SidebarSubmenu