import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type adminSliceType = {
    id: string | null;
}

const admin: adminSliceType = {
    id: null,
}

const adminSlice = createSlice({
    name: "adminSlice",
    initialState: admin,
    reducers: {
        setAdmin: (state, action:PayloadAction<string>) => {
            state.id = action.payload;
        }
    }
});

export const { setAdmin } = adminSlice.actions;
export default adminSlice.reducer;