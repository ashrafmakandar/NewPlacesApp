import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { places, TouristPlace } from "../Utils/Places";

interface TouristState {
  places: TouristPlace[];
  visitedPlaces:TouristPlace[]
}

const initialState: TouristState = {
  places: places,
  visitedPlaces:[]
   // preloaded on app start
};

const placesSlice = createSlice({
  name: "places",
  initialState,
  reducers: {
    toggleVisited: (state, action: PayloadAction<number>) => {
      const place = state.places.find((p) => p.id === action.payload);
      if (place) {
        place.visited = !place.visited;

        if (place.visited) {
          // ✅ add if not already in visitedPlaces
          if (!state.visitedPlaces.find((p) => p.id === place.id)) {
            state.visitedPlaces.push(place);
          }
        } else {
          // ❌ remove if unvisited
          state.visitedPlaces = state.visitedPlaces.filter(
            (p) => p.id !== place.id
          );
        }
      }
    },
   
  },
});

export const { toggleVisited, } = placesSlice.actions;
export default placesSlice.reducer;
