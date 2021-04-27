import React, {Component} from "react";
import ContactList from "./contacts/contactsList/ContactsList";
import { ContactForm } from "./contacts/contactForm/СontactForm";
import FindContact from "./contacts/findContact/FindContact";
import style from "./Phonebook.module.css";
import { connect } from "react-redux";
import { addNewContact, deleteContact, getFilterValue} from "../redux/contacts/contactsAction";

class Phonebook extends Component {
    state = {
        inOn: false,
    };

    componentDidMount() {
        this.setState({ inOn: true });
    }

    render() {
        const { inOn } = this.state;
        const {
            items,
            filter,
            addNewContact,
            deleteContact,
            getFilterValue,
        } = this.props;
        return (
                <div className={style.container}>
                    <h1>Phonebook</h1>
                    <ContactForm addNewContact={addNewContact} items={items} />
                        <FindContact getFilterValue={getFilterValue} />
                    <ContactList items={items} filter={filter} deleteContact={deleteContact} />
                </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.contacts.items,
        filter: state.contacts.filter,
    };
};

const mapDispatchToProps = { addNewContact, deleteContact, getFilterValue };

export default connect(mapStateToProps, mapDispatchToProps)(Phonebook);
