import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  // Define your initial state here
  groups: null,
}

export const groupsSlice = createSlice({
  name: "groups",
  initialState,
  reducers: {
    // Define your reducer functions here
    setGroups: (state, action) => {
      state.groups = action.payload
    },
  },
})

export const {
  setGroups,
} = groupsSlice.actions
