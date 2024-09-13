import { useState } from "react";
import "./App.css";
import ContactList from "./ContactList/ContactList";

function App() {
  return (
    <>
      <div>
        <h1>Phonebook</h1>
        {/* <ContactForm />
        <SearchBox /> */}
        <ContactList />
      </div>
    </>
  );
}

export default App;
