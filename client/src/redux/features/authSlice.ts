import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: { firstName: null, lastName: null, phone: null, isAdmin: null },
    reducers: {
        login: (state, action) => {
            state.firstName = action.payload.firstName
            state.lastName = action.payload.lastName
            state.phone = action.payload.phone
            state.isAdmin = action.payload.isAdmin
        },
        logout: (state) => {
            state.firstName = null
            state.lastName = null
            state.phone = null
            state.isAdmin = null
        }
    }
})

export const { login, logout } = authSlice.actions
export default authSlice.reducer