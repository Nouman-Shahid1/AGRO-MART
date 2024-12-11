
import Link from "next/link";
import { FaTimes } from "react-icons/fa";
import CartCard from "../CartCard/CartCard";

const CartSidebar = ({handleCart}) => {

  return (
    <div className="fixed right-0 top-0 w-[300px] md:w-[400px] h-screen bg-green-900 text-white z-50 shadow-xl">
      <div className="block absolute top-5 right-5 cursor-pointer" >
        <FaTimes style={{ fontSize: "25px", color: "red" }} onClick={handleCart} />
      </div>
      <div className="text-3xl text-white fond-bold px-5 py-8">
        <p>Cart Items</p>
      </div>
      <div className="border overflow-scroll rounded-md mx-8 h-[600px]">
        <CartCard />
        <CartCard />
        <CartCard />
        <CartCard />
      </div>
      <div className="flex justify-between m-5">
        <div className="px-5 text-lg font-medium">
          <p>SubTotal</p>
        </div>
        <div className="px-5">
          <strong>00.00</strong>
        </div>
      </div>
      <div className="absolute bottom-3 left-5">
        <button className="px-4 py-2 bg-red-600 rounded-lg text-white" >Clear Cart</button>
        <Link href="/check-out" className="px-4 py-2 bg-green-600 rounded-lg text-white ml-3">Checkout</Link>
      </div>
    </div>
  );
};

export default CartSidebar;
