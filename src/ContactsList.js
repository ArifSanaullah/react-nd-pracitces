import React from "react";
import ContactListItem from "./ContactListItem";

function ContactsList({ contacts, onDeleteContact }) {
  return (
    <div>
      <ul className="contact-list">
        {contacts.map((contact) => (
          <ContactListItem
            contact={contact}
            key={contact.id}
            onDeleteContact={onDeleteContact}
          />
        ))}
      </ul>
    </div>
  );
}

export default ContactsList;
