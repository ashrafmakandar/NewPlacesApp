import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { places, TouristPlace } from "../Utils/Places";

interface TouristState {
  places: TouristPlace[];
}

const initialState: TouristState = {
  places: places, // preloaded on app start
};

const placesSlice = createSlice({
  name: "places",
  initialState,
  reducers: {
    toggleVisited: (state, action: PayloadAction<number>) => {
      const place = state.places.find((p) => p.id === action.payload);
      if (place) {
        place.visited = !place.visited;
      }
    },
    resetVisited: (state) => {
      state.places.forEach((p) => (p.visited = false));
    },
  },
});

export const { toggleVisited, resetVisited } = placesSlice.actions;
export default placesSlice.reducer;
