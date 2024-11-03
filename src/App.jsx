import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from './redux/contactsOps';
import { selectContacts, selectLoading, selectError } from './redux/contactsSlice';
import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';
import { ThreeDots } from 'react-loader-spinner';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {loading && (
        <div  className="loading">
          <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="grey"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      )}
      {error && <p className='errorMessage'>Error: {error}</p>}
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
