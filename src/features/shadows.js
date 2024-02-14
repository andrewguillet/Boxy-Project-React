import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialState = [
  {
    id: nanoid(8),
    active: true,
    inset: false,
    inputs: [
      {
        inputNumber: 1,
        name: "Horizontal offset",
        value: 0,
        type: "range",
        minMax: [-250, 250],
      },
      {
        inputNumber: 2,
        name: "Vertical offset",
        value: 0,
        type: "range",
        minMax: [-250, 250],
      },
      {
        inputNumber: 3,
        name: "Blur radius",
        value: 15,
        type: "range",
        minMax: [0, 250],
      },
      {
        inputNumber: 4,
        name: "Spread radius",
        value: -3,
        type: "range",
        minMax: [-250, 250],
      },
      {
        inputNumber: 5,
        name: "Color",
        value: "#4f4f4f",
        type: "color",
      },
    ],
  },
];

export const shadowSlice = createSlice({
  name: "shadows",
  initialState,
  reducers: {
    removeShadow: (state, action) => {
      const shadowIndexToRemove = state.findIndex(
        (shadow) => shadow.id === action.payload
      );

      state.splice(shadowIndexToRemove, 1);
    },
    addShadow: (state, action) => {
      state.push({
        id: nanoid(8),
        active: true,
        inset: false,
        inputs: [
          {
            inputNumber: 1,
            name: "Horizontal offset",
            value: 0,
            type: "range",
            minMax: [-250, 250],
          },
          {
            inputNumber: 2,
            name: "Vertical offset",
            value: 0,
            type: "range",
            minMax: [-250, 250],
          },
          {
            inputNumber: 3,
            name: "Blur radius",
            value: 15,
            type: "range",
            minMax: [0, 250],
          },
          {
            inputNumber: 4,
            name: "Spread radius",
            value: -3,
            type: "range",
            minMax: [-250, 250],
          },
          {
            inputNumber: 5,
            name: "Color",
            value: "#4f4f4f",
            type: "color",
          },
        ],
      });
    },
    updateShadowValue: (state, action) => {
      // On trouve quelle ombre via son ID
      const currentShadow = state.find(
        (shadow) => shadow.id === action.payload.shadowID
      );

      // On va trouver input en question
      const currentInput = currentShadow.inputs.find(
        (input) => input.inputNumber === action.payload.inputNumber
      );

      // On lui passe valeur en cours
      currentInput.value = action.payload.value;
    },
    updateCheckbox: (state, action) => {
      // On trouve quelle ombre via son ID
      const currentShadow = state.find(
        (shadow) => shadow.id === action.payload.shadowID
      );

      // currentShadow[soit active soit inset] on inverse sa valeur
      currentShadow[action.payload.name] = !currentShadow[action.payload.name];
    },
  },
});

export const { updateCheckbox, updateShadowValue, addShadow, removeShadow } =
  shadowSlice.actions;

export default shadowSlice.reducer;
