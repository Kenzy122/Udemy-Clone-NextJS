import Image from "next/image";
import React from "react";

function CartIcon({ className }) {
  const w = 50;
  return (
    <Image
      src="/shopping-cart.png"
      width={w}
      height={w}
      alt="shopping cart"
      className={className}
    />
  );
}

export default CartIcon;
