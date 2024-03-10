import { useDispatch } from "react-redux";
import { fetchDeleteContact } from "../../redux/numbers/operationNumber";
import css from './Contact.module.css'

export const Contact = ({ contact } ) => {
  const { id, name, phone } = contact;
  const dispatch = useDispatch();
  const deleteContact = () => dispatch(fetchDeleteContact(id));
  return (
    <li key={id} className={css.contactListItem}>
         <p>{name}</p>
          <p>{phone}</p>

     <button type="button" onClick={deleteContact} className={css.contactBtn}>
       Delete
     </button>
   </li>
 );
}

