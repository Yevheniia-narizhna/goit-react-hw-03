import s from "./ContactList.module.css";
import Contact from "../Contact/Contact";
export default function ContactList({ contacts, onDeleteContact }) {
  return (
    <>
      <ul className={s.contactlist}>
        {contacts.map((item) => {
          return (
            <li key={item.id}>
              <Contact {...item} onDelete={onDeleteContact} />
            </li>
          );
        })}
      </ul>
    </>
  );
}
