import contactData from "./../contact.json";
import s from "./ContactList.module.css";
import Contact from "../Contact/Contact";
export default function ContactList({ contacts, onDeleteContact }) {
  return (
    <>
      <ul className={s.contactlist}>
        {contacts.map((contact) => {
          return (
            <li key={contact.id}>
              <Contact {...contact} onDelete={onDeleteContact} />
            </li>
          );
        })}
      </ul>
    </>
  );
}
