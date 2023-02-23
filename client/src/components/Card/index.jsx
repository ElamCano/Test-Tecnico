import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { sumPrice } from "../../store/slice";

export default function Card({ title, price, description, image, id }) {
  const [newTitle, setNewTitle] = useState("");
  const [newSize, setNewSize] = useState("20");
  const [addCart, setAddCart] = useState(1);
  const dispatch = useDispatch();

  function handleInput(e) {
    e.preventDefault();
    setNewTitle(e.target.value);
  }
  function handleSize(e) {
    e.preventDefault();
    setNewSize(e.target.value);
  }

  function handleCart(e) {
    e.preventDefault();
    setAddCart(e.target.value);
  }

  function handleButton(e) {
    e.preventDefault();
    let result = addCart * price;
    dispatch(sumPrice(result));
  }

  return (
    <div className="flex flex-col flex-wrap  border-2 border-black w-60 h-100 m-1 justify-around p-5 bg-grayy">
      <img
        src={image}
        alt={image}
        className="rounded-3xl object-cover  h-28 w-48 mx-auto mt-8"
      />
      <div
        className="mt-4 font-bold text-center"
        style={{ fontSize: `${newSize}px` }}
      >
        {newTitle ? newTitle : title}
      </div>
      <div className="flex mt-6">
        <div className="font-bold text-xl">${price}.00</div>
        <input
          type="number"
          placeholder="1"
          className="w-10 h-6 ml-4 border border-slaate mt-0.5"
          onChange={handleCart}
        />
      </div>
      <div className="text-slate-500 mx-auto mt-4">{description}</div>
      <button
        className="bg-fuchsia-300 hover:bg-black mt-4 p-2 w-28 border border-black mx-auto hover:text-fuchsia-300"
        onClick={handleButton}
      >
        Add to cart
      </button>
      <div className="underline decoration-1 hover:cursor-pointer mx-auto mt-1">
        Learn More
      </div>
      <input
        type="text"
        placeholder="New title..."
        value={newTitle}
        onChange={(e) => handleInput(e)}
        className="w-48 "
      />
      <input type="range" min="10" max="30" step="1" onChange={handleSize} />
    </div>
  );
}
