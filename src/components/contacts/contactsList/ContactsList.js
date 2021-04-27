import React from "react";
import ContactListItem from "./contactsListItem/ContactsListItem";

function filteredContact(items, filter) {
    if (filter.length !== 0) {
        return items.filter((contact) =>
            contact.name.toLowerCase().includes(filter.toLowerCase())
        );
    } else {
        return items;
    }
}

const ContactList = ({ items = [], filter = "", deleteContact }) => {
    const contacts = filteredContact(items, filter);
    return (
        <ul >
            {contacts.map((contact) => (
                    <ContactListItem
                        deleteContact={deleteContact}
                        contact={contact}
                        key={contact.id}
                    />
            ))}
        </ul>
    );
};

export default ContactList;
