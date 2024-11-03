import React from 'react';
import { useDispatch } from 'react-redux';
import { BsFillPersonFill, BsFillTelephoneFill } from "react-icons/bs";
import { deleteContact } from '../../redux/contactsOps';
import styles from './Contact.module.css';

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDeleteClick = () => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={styles.contactBloc}>
      <div className={styles.contactItem}>
        <p><span className={styles.icon}><BsFillPersonFill size={20}/></span>{name}</p>    
        <p><span className={styles.icon}><BsFillTelephoneFill /></span>{number}</p>
      </div>
      <button type='button' onClick={handleDeleteClick}>Delete</button>
    </div>
  );
}

export default Contact;
