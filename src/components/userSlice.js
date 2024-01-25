import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'userFavorites',
    initialState: [],
    reducers: {
        addFilm: (state, action) => {
            state.push(action.payload)
        },
        removeFilm: (state, action) => {
            return state.filter(item => item !== action.payload)
        }
    }
})

//Action creators
export const { addFilm, removeFilm } = userSlice.actions

export const userReducer = userSlice.reducer