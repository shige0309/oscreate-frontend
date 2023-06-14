import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { adminType } from "Type";

type adminSliceType = {
    user: adminType | null;
}

const admin: adminSliceType = {
    user: JSON.parse(localStorage.getItem("user")!) || null,
}

const adminSlice = createSlice({
    name: "adminSlice",
    initialState: admin,
    reducers: {
        setAdmin: (state, action:PayloadAction<adminType>) => {
            localStorage.setItem("user", JSON.stringify(action.payload));
            state.user = action.payload;
        }
    }
});

export const { setAdmin } = adminSlice.actions;
export default adminSlice.reducer;