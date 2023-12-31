import React from "react";
import { BsChevronUp, BsChevronDown } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { removeItem, increase, decrease } from "../control/cardSlice";

function CourseItem({ id, title, price, img, quantity }) {
  const dispatch = useDispatch();

  return (
    <div className="cardItem">
      <img src={img} alt="" />
      <div className="cardInfo">
        <h4>{title}</h4>
        <h4 className="price">{price} TL</h4>
        <div>
          <button className="btnup" onClick={() => dispatch(increase(id))}>
            <BsChevronUp />
          </button>
          <p className="cardQuantity">{quantity}</p>
          <button className="btndown" onClick={() => dispatch(decrease(id))}>
            <BsChevronDown />
          </button>
        </div>
        <button
          onClick={() => dispatch(removeItem(id))}
          className="cardDeleteButton"
        >
          Sil
        </button>
      </div>
    </div>
  );
}

export default CourseItem;
