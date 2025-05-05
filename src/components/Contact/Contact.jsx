import { HiUser } from "react-icons/hi2";
import { FaPhoneAlt } from "react-icons/fa";
import s from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContacts } from "../../redux/contactsSlice";
import PropTypes from "prop-types";



const Contact = ({ id, name, number }) => {
    const dispatch = useDispatch();
    const handleDelete = () => dispatch(deleteContacts(id));
  
    return (
      <li className={s.list}>
        <div>
          <div className={s.info}>
            <HiUser />
            <p>{name}</p>
          </div>
          <div className={s.info}>
            <FaPhoneAlt />
            <p>{number}</p>
          </div>
        </div>
        <button type="button" className={s.button} onClick={handleDelete}>
          Delete
        </button>
      </li>
    );
  };
  
  Contact.propTypes = {
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  };
  
  export default Contact;
