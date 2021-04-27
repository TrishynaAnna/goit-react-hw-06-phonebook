import { createReducer } from "@reduxjs/toolkit"
import { addNewContact, deleteContact, getFilterValue } from "./contactsAction";

const contactsReducer = createReducer(
    { items: [], filter: "" },
    {
        [addNewContact]: (state, action) => ({
            ...state,
            items: [...state.items, action.payload],
        }),
        [deleteContact]: (state, action) => ({
            ...state,
            items: [...state.items.filter((item) => item.id !== action.payload)],
        }),
        [getFilterValue]: (state, action) => ({ ...state, filter: action.payload }),
    }
);

export default contactsReducer;
