import { createSlice } from "@reduxjs/toolkit";
import courseItems from "../courseItems";

const initialState = {
  cardItems: courseItems,
  quantity: 5,
  total: 0,
};

const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    clearcard: (state) => {
      state.cardItems = [];
    },
    //action payload oluyor consola yazdırınca anlasılıyor
    removeItem: (state, action) => {
      console.log(action);
      console.log(action.payload);
      const itemId = action.payload;
      state.cardItems = state.cardItems.filter((item) => item.id !== itemId);
    },
    increase: (state, action) => {
      const cardItem = state.cardItems.find(
        (item) => item.id === action.payload
      ); //artık tekli objeye ulasmis olduk burdan quantitysine müdahele ederek arttırma aaltma islemi yapabiliriz
      cardItem.quantity += 1;
    },
    decrease: (state, action) => {
      const cardItem = state.cardItems.find(
        (item) => item.id === action.payload
      );
      cardItem.quantity -= 1;
    },
    CalculateTotal: (state) => {
      let total = 0;
      let quantity = 0;
      state.cardItems.forEach((item) => {
        total += item.quantity * item.price;
        quantity += item.quantity;
      });
      state.quantity = quantity;
      state.total = total;
    },
  },
});
//reducersin içindeki actionu dışarı açtık
export const { clearcard, removeItem, increase, decrease, CalculateTotal } =
  cardSlice.actions;

console.log(cardSlice);

export default cardSlice.reducer;
