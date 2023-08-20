import {configureStore} from "@reduxjs/toolkit"
import createReducer from "./createSlice"

export const store = configureStore({
    reducer:createReducer,
})
