import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaTrash, FaPlus, FaMinus } from "react-icons/fa";
import {
  addToCart,
  cartitem,
  cartprice,
  clearCart,
  decreaseQuantity,
  removeFromCart,
} from "../../store/slices/cartslice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(cartitem);
  const subtotal = useSelector(cartprice);
  const shippingCharge = 30;
  const total = subtotal + shippingCharge;

  const handleRemoveItem = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleResetCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-center text-lg my-12">Your cart is empty</p>
      ) : (
        <>
          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-3 px-4 text-left border-b">Product</th>
                  <th className="py-3 px-4 text-right border-b">Price</th>
                  <th className="py-3 px-4 text-center border-b">Quantity</th>
                  <th className="py-3 px-4 text-right border-b">Sub Total</th>
                  <th className="py-3 px-4 text-right border-b">Action</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id} className="border-b hover:bg-gray-50">
                    <td className="py-4 px-4">
                      <div className="flex items-center">
                        <img
                          src={item.images?.[0]}
                          alt={item.title}
                          className="w-20 h-20 object-contain mr-4 border rounded"
                        />
                        <span>{item.title}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-right">
                      ${item.price.toFixed(2)}
                    </td>
                    <td className="py-4 px-4 text-center">
                      <div className="flex items-center justify-center">
                        <button
                          onClick={() => dispatch(decreaseQuantity(item?.id))}
                          className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded hover:bg-gray-300">
                          <FaMinus className="text-sm" />
                        </button>
                        <span className="mx-3 w-6 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => dispatch(addToCart(item))}
                          className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded hover:bg-gray-300">
                          <FaPlus className="text-sm" />
                        </button>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-right">
                      ${(item.price * item.quantity).toFixed(2)}
                    </td>
                    <td className="py-4 px-4 text-right">
                      <button
                        onClick={() => handleRemoveItem(item.id)}
                        className="text-red-600 hover:text-red-800">
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
            <button
              onClick={handleResetCart}
              className="px-6 py-2 bg-red-100 text-red-700 border border-red-300 rounded hover:bg-red-200 font-medium">
              RESET CART
            </button>

            <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
              <input
                type="text"
                placeholder="Coupon Number"
                className="px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 flex-grow"
              />
              <button className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 font-medium">
                Apply Coupon
              </button>
            </div>
          </div>

          <div className="bg-gray-50 border rounded p-6 max-w-md ml-auto">
            <h2 className="text-xl font-bold mb-4">Cart totals</h2>
            <div className="border-t my-4"></div>

            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>

            <div className="flex justify-between mb-2">
              <span>Shipping Charge</span>
              <span>${shippingCharge.toFixed(2)}</span>
            </div>

            <div className="border-t my-4"></div>

            <div className="flex justify-between text-lg font-bold mb-6">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>

            <button className="w-full py-3 bg-blue-600 text-white rounded hover:bg-blue-700 font-medium">
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
