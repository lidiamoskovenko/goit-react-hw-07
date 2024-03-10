import {ContactForm} from './components/ContactForm/ContactForm';
import {ContactList} from './components/ContactList/ContactList';
import {SearchForm} from './components/SearchForm/SearchForm';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";


import { Loader } from "./components/Loader/Loader";
import { getLoading } from "./redux/selector";
import { fetchContacts } from "./redux/numbers/operationNumber";

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  const isLoading = useSelector(getLoading);
  return (
    <div >
     
        <h1>Phonebook</h1>
      <ContactForm />
      <SearchForm />
      <ContactList />
      {isLoading && <Loader />}
   
      
    </div>
  );
}