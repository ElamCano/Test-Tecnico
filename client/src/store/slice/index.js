import { createSlice } from "@reduxjs/toolkit";
//hp
export const totalPrices = createSlice({
  name: "prices",
  initialState: {
    cart: [],
  },
  reducers: {
    setCart: (state, action) => {
      state.cart = action.payload;
    },
  },
});

export const { setCart } = totalPrices.actions;
export default totalPrices.reducer;

export const sumPrice = (price) => {
  return async function (dispatch, getState) {
    try {
      const { cart } = getState().prices;
      let begin = 0 + price;
      let suma = cart.reduce((a, b) => a + b, begin);

      return dispatch(setCart([suma]));
    } catch (e) {
      console.log("error: action play");
    }
  };
};
