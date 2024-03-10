import { useSelector } from 'react-redux';
import { Contact } from '../Contact/Contact';
import css from './ContactList.module.css';
import { getContact, getFilter } from "../../redux/selector";


export const ContactList = () => {
  const dataContact = useSelector(getContact);
  const filterQuery = useSelector(getFilter);
  const filteredContacts = dataContact.filter((data) => {
    return data.name.toLowerCase().includes(filterQuery.toLowerCase());
  });
  return (
    <div >
      {filteredContacts.length > 0 ?(<ul className={css.contactList}>
        {filteredContacts.map((contact) => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </ul>) : <p>No contacts found</p> }
      
    </div>
  );
};

