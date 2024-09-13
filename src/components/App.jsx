import { useState } from "react";
import "./App.css";
import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";
import contactData from "./contact.json";

function App() {
  const [contacts, setContacts] = useState(contactData); //ContactList//

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
    setFilter((prev) => prev.filter((contact) => contact.id !== contactId));
  };
  const contactFilter = getFilteredContacts();
  return (
    <>
      <div>
        <h1>Phonebook</h1>
        {/* <ContactForm /> */}
        <SearchBox inputValue={filter} handleChange={handleChange} />
        <ContactList contacts={contactFilter} onDeleteContact={handleDelete} />
      </div>
    </>
  );
}

export default App;
