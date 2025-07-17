import React from "react";
import { FaCartShopping } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { cartquantity } from "../../store/slices/cartslice";

const Navbar = () => {
    const cartItemCount = useSelector(cartquantity)
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-10 mb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <NavLink to="/" className="text-3xl italic font-bold text-orange-500">
              Products
            </NavLink>
          </div>
          <div className="flex ">

          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            <NavLink
              to="/"
              className="border-orange-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-xl font-medium"
            >
              Shop
            </NavLink>
          </div>
          <div className="ml-6 flex items-center">
            <NavLink to="/cart" className="p-1 rounded-full text-gray-400 hover:text-gray-500 relative">
              <FaCartShopping className="h-6 w-6" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-orange-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </NavLink>
          </div>
          </div>
        </div>
      </div>
      <div className="sm:hidden">
        <div className="pt-2 pb-3 space-y-1">
          <NavLink
            to="/"
            className="bg-orange-50 border-orange-500 text-orange-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
          >
            Shop
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;