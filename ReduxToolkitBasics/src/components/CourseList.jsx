import React from "react";
import { useSelector } from "react-redux";
import CourseItem from "./CourseItem";

function CourseList() {
  const { cardItems, quantity, total } = useSelector((store) => store.card);

  return (
    <>
      {quantity < 1 ? (
        <section>
          <header>
            <h2>Sepetim</h2>
            <h4>Sepetiniz boş :/</h4>
          </header>
        </section>
      ) : (
        <section>
          <header>
            <h2>Sepetim</h2>
          </header>
          <div>
            {cardItems.map((item, index) => {
              return <CourseItem key={index} {...item} />;
            })}
          </div>
          <footer>
            <hr />
            <div>
              <h4>
                Toplam Tutar <span>{total} TL</span>
              </h4>
            </div>
            <button>Sepeti Temizle</button>
          </footer>
        </section>
      )}
    </>
  );
}

export default CourseList;
