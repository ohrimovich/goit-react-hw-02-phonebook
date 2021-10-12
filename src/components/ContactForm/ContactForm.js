import React from "react";
import { Component } from "react";
import s from './ContactForm.module.scss';


class ContactForm extends Component {

    state = {
        name: '',
        number: '',
    }

    handlerChange = e => {
        const { name, value } = e.currentTarget;
        this.setState({ [name]: value });
    };

    reset = () => {
        this.setState({
        name: '',
        number: '',
        })
    }

    handlerSubmit = e => {
        e.preventDefault();
      

        this.props.onSubmit(this.state);

        this.reset();
    }

    render() {
        const{name, number} = this.state
        return (
            <form className={s.form} onSubmit={this.handlerSubmit}>
                <label className={s.label}>
                    Name
                    <input
                        className={s.input}
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                        required
                        value={name}
                        onChange={this.handlerChange}
                        autoComplete="off"
                    />
                </label>
                <label className={s.label}>
                    Number
                    <input
                        className={s.input}
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                        required
                        value={number}
                        onChange={this.handlerChange}
                        autoComplete="off"
                    />
                </label>
                <button type='submit' className={s.button}>Add contact</button>
            </form>
        )
    }
}

export default ContactForm;