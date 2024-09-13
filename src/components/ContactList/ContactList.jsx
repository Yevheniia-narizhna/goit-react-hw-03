import contactData from "./../contact.json";
import s from "./ContactList.module.css";
import Contact from "../Contact/Contact";
export default function ContactList() {
  return (
    <>
      <ul className={s.contactlist}>
        {contactData.map((item) => {
          return (
            <li key={item.id}>
              <Contact {...item} />
            </li>
          );
        })}
      </ul>
    </>
  );
}
