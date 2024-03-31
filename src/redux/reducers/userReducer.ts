import { createSlice } from "@reduxjs/toolkit";

interface InitialStates {
  username: string;
}

const initialState: InitialStates = {
  username: "",
};

const UserSlice = createSlice({
  name: "USER",
  initialState,
  reducers: {
    UserRedux(
      state,
      action: {
        type: string;
        payload: string;
      }
    ) {
      const username = action.payload;

      return {
        ...state,
        username,
      };
    },
  },
});

// `createSlice` automatically generated action creators with these names.
// export them as named exports from this "slice" file
export const { UserRedux } = UserSlice.actions;

// Export the slice reducer as the default export
export default UserSlice.reducer;
