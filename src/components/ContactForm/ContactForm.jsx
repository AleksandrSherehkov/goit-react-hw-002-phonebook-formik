import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { BsFillPersonPlusFill } from 'react-icons/bs';
import { Box } from 'utilities/styles/Box';
import { Text } from 'utilities/styles/Text';
import { ButtonStyled, InputStyled } from 'components/ContactForm/ContactForm.styled';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  hendleSubmit = e => {
    const { createContact } = this.props;
    e.preventDefault();
    createContact(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { hendleSubmit, handleChange } = this;
    const { name, number } = this.state;
    return (
      <Box mt={4} flexDirection="column" gridGap={4} as="form" onSubmit={hendleSubmit}>
        <Box alignItems="flex-start" flexDirection="column" as="label">
          <Text fontSize="m" color="black" as="span">
            Name
          </Text>
          <InputStyled
            placeholder="Enter full name"
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handleChange}
          />
        </Box>
        <Box alignItems="flex-start" flexDirection="column" as="label">
          <Text fontSize="m" color="black" as="span">
            Number
          </Text>
          <InputStyled
            placeholder="Enter number"
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={handleChange}
          />
        </Box>
        <ButtonStyled type="submit">
          {' '}
          <BsFillPersonPlusFill size={20} />
          Add contact
        </ButtonStyled>
      </Box>
    );
  }
}

ContactForm.propTypes = {
  createContact: PropTypes.func.isRequired,
};
