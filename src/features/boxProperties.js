import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialState = [
  {
    inputNumber: 1,
    name: "Border radius",
    value: 25,
    type: "range",
    minMax: [0, 250],
  },
  {
    inputNumber: 2,
    name: "Height",
    value: 250,
    type: "range",
    minMax: [0, 500],
  },
  {
    inputNumber: 3,
    name: "Width",
    value: 250,
    type: "range",
    minMax: [0, 500],
  },
  {
    inputNumber: 4,
    name: "Background color",
    value: "#fff",
    type: "color",
  },
];

export const boxSlice = createSlice({
  name: "boxProperties",
  initialState,
  reducers: {
    updateBoxValue: (state, action) => {
      // On trouve element dont inputNumber correspond a action.payload.inputnumber. Une fois que tu l'as trouvé, tu prends sa propriété value et tu lui donne a action.payload.value
      // Qd on change la valeur, on va envoyer l'input en question avec (payload.inputNumber) et value (payload.value)
      state.find((el) => el.inputNumber === action.payload.inputNumber).value =
        action.payload.value;
    },
  },
});

export const { updateBoxValue } = boxSlice.actions;

export default boxSlice.reducer;
