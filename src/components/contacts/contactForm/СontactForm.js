import React, {Component} from "react";
import { v4 as uuidv4 } from "uuid";
import style from "../contactForm/ContactForm.module.css"

export class ContactForm extends Component {
    state = {
        name: "",
        number: "",
        exist: false,
    };

    handleInputValue = (el) => {
        const inputValue = el.target.dataset.type;
        this.setState({
            [inputValue]: el.target.value,
        });
    };

    handleSubmit = (el) => {
        el.preventDefault();
        const contact = {
            id: uuidv4(),
            name: this.state.name.replace(/\b\w/g, (l) => l.toUpperCase()),
            number: this.state.number,
        };
        if (
            this.props.items.find(
                (element) => element.name.toLowerCase() === contact.name.toLowerCase()
            )
        ) {
            this.setState({ exist: true });
            return setTimeout(() => {
                this.setState({ exist: false });
            }, 2000);
        } else {
            this.props.addNewContact(contact);
        }
        this.setState({
            name: "",
            number: "",
        });
    };

    render() {
        const { name, number, exist } = this.state;
        return (
            <form  onSubmit={this.handleSubmit}>
                <label className={style.label} htmlFor="contactName">Name</label>
                <input
                    className={style.input}
                    id="contactName"
                    type="text"
                    data-type="name"
                    value={name}
                    placeholder="Enter your name"
                    onChange={this.handleInputValue}
                />
                <br />
                <label className={style.label} htmlFor="contactNumber">Number
                    (xxx-xx-xx)</label>
                <input
                    className={style.input}
                    id="contactNumber"
                    type="text"
                    data-type="number"
                    value={number}
                    pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
                    placeholder="Enter your phone number in this format"
                    onChange={this.handleInputValue}
                />
                <button className={style.button} variant="outlined" type="submit">
                    Add contact
                </button>
            </form>
        );
    }
}
