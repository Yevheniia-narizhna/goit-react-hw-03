import s from "./Contact.module.css";
export default function Contact({ id, name, number }) {
  return (
    <div className={s.contact}>
      <div className={s.item}>
        <p>{name}</p>
        <p>{number}</p>
      </div>
      <button>Delete</button>
    </div>
  );
}
