import { configureStore } from "@reduxjs/toolkit";
import { groupsSlice } from "./slices/groups";

export default configureStore({
    reducer: {
        // Add reducers here
        groups: groupsSlice.reducer
    }
})
