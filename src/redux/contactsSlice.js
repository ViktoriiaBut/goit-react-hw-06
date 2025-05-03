import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "contacts",
    initialState: {
        items: [],
    },


reducers: {
    addContacts: (state, action) => {
        state.items.push(action.payload)
    },
    deleteContacts: (state, action) => {
        state.items = state.items.filter((item) => item.id !== action.payload)
    }
}

})

export const { addContacts, deleteContacts } = slice.actions;
export default slice.reducer;