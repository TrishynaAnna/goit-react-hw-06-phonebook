import { createAction } from "@reduxjs/toolkit";

const addNewContact = createAction("ADD_NEW_CONTACT");
const deleteContact = createAction("DELETE_CONTACT", function prepare(e) {
    const id = e.target.id;
    return {
        payload: id,
    };
});
const getFilterValue = createAction("FILTER_CONTACT", function prepare(e) {
    const string = e.target.value;
    return {
        payload: string,
    };
});

export { addNewContact, deleteContact, getFilterValue };
