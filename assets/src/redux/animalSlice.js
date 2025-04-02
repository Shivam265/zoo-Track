// animalSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

// Initial state contains an array for storing animal objects.
const initialState = {
  animalList: [],
};

const animalSlice = createSlice({
  name: "animals",
  initialState,
  reducers: {
    // Action to add a new animal. Generates a unique id.
    addAnimal: (state, action) => {
      state.animalList.push({ id: uuidv4(), ...action.payload });
    },
    // Action to remove an animal based on its id.
    removeAnimal: (state, action) => {
      state.animalList = state.animalList.filter(
        (animal) => animal.id !== action.payload
      );
    },
    // Action to edit an existing animal. Finds the animal by id and updates its details.
    editAnimal: (state, action) => {
      const index = state.animalList.findIndex(
        (animal) => animal.id === action.payload.id
      );
      if (index !== -1) {
        state.animalList[index] = action.payload;
      }
    },
  },
});

export const { addAnimal, removeAnimal, editAnimal } = animalSlice.actions;
export default animalSlice.reducer;
