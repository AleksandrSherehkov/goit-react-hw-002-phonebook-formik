import PropTypes from 'prop-types';
import { Contact } from 'components/Contact/Contact';
import { Box } from 'utilities/styles/Box';

export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <Box mt={4} flexDirection="column" gridGap={4} as="ul">
      {contacts.map(({ id, name, number }) => {
        return (
          <Contact
            key={id}
            name={name}
            number={number}
            deleteContact={deleteContact}
            contactId={id}
          />
        );
      })}
    </Box>
  );
};

ContactList.prototype = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};
