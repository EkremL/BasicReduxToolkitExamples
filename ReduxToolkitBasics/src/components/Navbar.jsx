import React from "react";
// npm install react-icons --save
import { FaShoppingBasket } from "react-icons/fa";
import { useSelector } from "react-redux";

function Navbar() {
  //!store in içindeki quantitiye ulaştik bunun icin useselector import edilir store.card daki card, storedeki reducerin içindeki isimle aynı olmalı
  const { quantity } = useSelector((store) => store.card);
  console.log(useSelector((store) => store.card));
  return (
    <nav>
      <div className="navBar">
        <h3>My Courses</h3>
        <div className="navDiv">
          <div className="itemsDiv">
            <p>{quantity}</p>
          </div>
          <FaShoppingBasket className="itemsIcon" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
