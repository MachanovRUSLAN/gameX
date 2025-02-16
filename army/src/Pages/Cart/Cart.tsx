import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Redux/Store";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../../Redux/Slice";

const Cart: React.FC = () => {

  //select CartItems from Redux slice comp
  const cartItems = useSelector((state: RootState) => state.counter.cartItems);
  const dispatch = useDispatch();

  return (
    <div className="bg-gray-800 p-6 text-white">
      <h2 className="text-2xl font-bold">Shopping Cart</h2>

      {cartItems.length > 0 ? (
        <div>
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex  justify-between items-center p-4"
            >
              <div>
                <img src={item.img} alt={item.title} className="w-16 h-16" />
              </div>
              <div className="lg:flex blok justify-between items-center lg:w-[80%]">
                <p className="font-bold">{item.title.slice(0, 14)}</p>
                <p className="font-bold">${item.price * item.quantity}</p>

                <div className="flex items-center">
                  {/* decremement button */}
                  <button
                    onClick={() => dispatch(decreaseQuantity(item.id))}
                    className="px-2 bg-white text-black rounded-md"
                  >
                    -
                  </button>
                  {/* quantity of Item */}
                  <span className="p-2 font-bold">{item.quantity}</span>
                  {/* decrement quantity */}
                  <button
                    onClick={() => dispatch(increaseQuantity(item.id))}
                    className="px-2  bg-white text-black rounded-md"
                  >
                    +
                  </button>
                </div>
              </div>
              {/* remove from cart  */}
              <button
                className="bg-red-500 text-white p-2 rounded-md"
                onClick={() => dispatch(removeFromCart(item.id))}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p>Your cart is empty</p>
      )}
    </div>
  );
};

export default Cart;
