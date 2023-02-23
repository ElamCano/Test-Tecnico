import React from "react";
import getProducts from "../Util";
import Card from "../Card";

const Cards = () => {
  let soaps = getProducts();

  return (
    <div className="flex flex-wrap ">
      {soaps?.map((e) => {
        return (
          <Card
            title={e.title}
            image={e.image}
            price={e.price}
            description={e.description}
            key={e.id}
            className="border-black"
          />
        );
      })}
    </div>
  );
};

export default Cards;
