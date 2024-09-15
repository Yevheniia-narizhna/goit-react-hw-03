import { useState, useEffect } from "react";
import "./App.css";
import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";
import contactData from "./contact.json";
import ContactForm from "./ContactForm/ContactForm";

function App() {
  const [contacts, setContacts] = useState(() => {
    const contactSave = window.localStorage.getItem("NewContacts");
    return contactSave ? JSON.parse(contactSave) : contactData;
  }); //ContactList//

  useEffect(() => {
    window.localStorage.setItem("NewContacts", JSON.stringify(contacts));
  }, [contacts]);

  const [filter, setFilter] = useState(""); //Searchbox//
  const handleChange = (e) => {
    setFilter(e.target.value);
  };
  const getFilteredContacts = () => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const handleContactAdd = (newContact) => {
    setContacts((prev) => [...prev, newContact]);
  };

  const handleDelete = (contactId) => {
    // console.log(contactId);

    setContacts((prev) => prev.filter((contact) => contact.id !== contactId));
  };
  const contactFilter = getFilteredContacts();
  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm onAddContact={handleContactAdd} />
        <SearchBox inputValue={filter} handleChange={handleChange} />
        <ContactList contacts={contactFilter} onDeleteContact={handleDelete} />
      </div>
    </>
  );
}

export default App;
