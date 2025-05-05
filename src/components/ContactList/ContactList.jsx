import s from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";

const getfilterContacts = (contacts, filter) => {
 if (!filter) return contacts;
 return contacts.filter(contact => 
  contact.name.toLowerCase().includes(filter.toLowerCase()) || contact.number.includes(filter));
 };

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filter.status);
  const filterContacts = getfilterContacts(contacts, filter);
   
  return (
    <ul className={s.contactList}>
    { filterContacts.map(contact => (
      <li key={contact.id}>
     <Contact data={contact} />
      </li>
     
        ))}
   </ul>
  );

};

export default ContactList;