import React from "react";
import { useSelector } from "react-redux";

export default function Sum() {
  const { cart } = useSelector((state) => state.prices);

  return (
    <div className="flex mt-8">
      <div className="mx-auto p-8 px-32 bg-grayy2 rounded-full hover:bg-fuchsia-200 ">
        <div className="font-bold text-2xl">Total:</div>
        <div className="font-bold text-2xl">${cart.length ? cart : 0}</div>
      </div>
    </div>
  );
}
