import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'userFavorites',
    initialState: [],
    reducers: {
        addFilm: (state, action) => {
            [...state, action.payload]
        },
        removeFilm: (state, action) => {
            state = state.filter(item => item !== action.payload)
        }
    }
})

//Action creators
export const { addFilm, removeFilm } = userSlice.actions

export const userReducer = userSlice.reducer