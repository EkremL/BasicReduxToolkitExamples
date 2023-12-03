//npm install @reduxjs/toolkit react-redux
//! ikisini birden kurmus olduk
import "./App.css";
import CourseList from "./components/CourseList";
import Navbar from "./components/Navbar";
import { useEffect } from "react";
import { CalculateTotal } from "./control/cardSlice";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const { cardItems } = useSelector((store) => store.card);
  const dispatch = useDispatch();
  //her carditems değiştiğinde render olacak
  useEffect(() => {
    dispatch(CalculateTotal());
  }, [cardItems]);
  return (
    <div className="App">
      <Navbar />
      <CourseList />
    </div>
  );
}

export default App;
