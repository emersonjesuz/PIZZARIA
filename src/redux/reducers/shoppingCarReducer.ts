import { createSlice } from "@reduxjs/toolkit";

interface Shopping {
  name: string;
  price: number;
  id: number;
  action: boolean;
  unit: number;
}

interface InititalState {
  list: Shopping[];
  somePrice: number;
}

const initialState: InititalState = {
  list: [],
  somePrice: 0,
};

const ShoppingCarSlice = createSlice({
  name: "SHOPPING_CAR",
  initialState,
  reducers: {
    AddShoppingCar(
      state,
      action: {
        type: string;
        payload: Shopping;
      }
    ) {
      const product = action.payload;
      const isExist = state.list.find((p) => p.id === product.id);
      if (isExist) {
        return {
          ...state,
        };
      }

      return {
        ...state,
        list: [...state.list, product],
      };
    },
    UpdateShoppingCar(
      state,
      action: {
        type: string;
        payload: {
          id: number;
          type: "-" | "+" | null;
          action?: boolean;
        };
      }
    ) {
      const { id, type } = action.payload;
      const newData = [...state.list];
      const data = newData.map((shopping) => {
        if (shopping.id === id) {
          if (type === "+") {
            shopping = { ...shopping, unit: shopping.unit + 1 };
          }
          if (type === "-") {
            if (shopping.unit > 1) {
              shopping = { ...shopping, unit: shopping.unit - 1 };
            }
          }
        }
        return shopping;
      });

      return {
        ...state,
        list: [...data],
      };
    },
    RemoveShoppingCar(
      state,
      action: {
        type: string;
        payload: { id: number };
      }
    ) {
      const { id } = action.payload;
      return {
        ...state,
        list: state.list.filter((item) => item.id !== id),
      };
    },
    RemoveAllShoppingCar(state) {
      return {
        ...state,
        list: [],
      };
    },
    SomePriceAllShoppingCar(state) {
      let value = 0;

      state.list.forEach((item) => {
        value += item.price * item.unit;
      });
      return {
        ...state,
        somePrice: value,
      };
    },
  },
});

export const {
  AddShoppingCar,
  RemoveShoppingCar,
  UpdateShoppingCar,
  RemoveAllShoppingCar,
  SomePriceAllShoppingCar,
} = ShoppingCarSlice.actions;

export default ShoppingCarSlice.reducer;
