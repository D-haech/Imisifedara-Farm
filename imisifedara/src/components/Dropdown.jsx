import React from 'react'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Link } from 'react-router-dom'


const Dropdown = () => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="mobile_dropdown lg:dropdown">
          MORE
        
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white ring-1 
        shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform 
        data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
      >
        <div className="py-1">
          <MenuItem>
            <Link
              to="/products"
              className="no-underline block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 
              data-focus:text-gray-900 data-focus:outline-hidden"
            >
              Products
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              to="/executives"
              className="no-underline block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 
              data-focus:text-gray-900 data-focus:outline-hidden"
            >
              Executives
            </Link>
          </MenuItem>
      
        </div>
      </MenuItems>
    </Menu> 
  )
}

export default Dropdown