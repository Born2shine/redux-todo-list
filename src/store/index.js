import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "./tasks-slice";

const store = configureStore({
    reducer: {
        tasks: taskSlice.reducer
    }
})

export default store