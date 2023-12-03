import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CourseItem from "./CourseItem";
import { clearcard } from "../control/cardSlice";
//actiona istenilen componentten ulasmak icin usedispatch da import edilmeli
function CourseList() {
  //dispatch işlemi
  const dispatch = useDispatch();

  const { cardItems, quantity, total } = useSelector((store) => store.card);

  return (
    <>
      {quantity < 1 ? (
        <section className="card">
          <header>
            <h2>Sepetim</h2>
            <h4>Sepetiniz boş :/</h4>
          </header>
        </section>
      ) : (
        <section className="card">
          <header>
            <h2>Sepetim</h2>
          </header>
          <div>
            {cardItems.map((item) => {
              return <CourseItem key={item.id} {...item} />;
            })}
          </div>
          <footer>
            <hr />
            <div className="tutar">
              <h4>
                Toplam Tutar <span>{total} TL</span>
              </h4>
            </div>
            <button
              //silme aksiyonunu veriyoruz
              onClick={() => dispatch(clearcard())}
              className="cardClearBtn"
            >
              Sepeti Temizle
            </button>
          </footer>
        </section>
      )}
    </>
  );
}

export default CourseList;
