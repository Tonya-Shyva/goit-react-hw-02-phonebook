import { BtnStyled } from 'components/ContactForm/ContactForm.styled';
import propTypes from 'prop-types';
import {
  ContactItem,
  ContactListStyled,
  ContactsWrap,
} from './ContactList.styled';

export const Contacts = ({ contacts, handleDelete }) => (
  <ContactsWrap>
    <ContactListStyled>
      {contacts.map((contact, id) => (
        <ContactItem key={id}>
          {contact.name}: {contact.number}
          <BtnStyled type="button" onClick={() => handleDelete(contact.id)}>
            Delete
          </BtnStyled>
        </ContactItem>
      ))}
    </ContactListStyled>
  </ContactsWrap>
);

Contacts.propTypes = {
  contacts: propTypes.arrayOf(
    propTypes.exact({
      id: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      number: propTypes.string.isRequired,
    })
  ),
  handleDelete: propTypes.func.isRequired,
};
