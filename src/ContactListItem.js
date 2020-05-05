import React from "react";

function ContactListItem({ contact, onDeleteContact }) {
  return (
    <li className="contact-list-item">
      <div
        className="contact-avatar"
        style={{ backgroundImage: `url(${contact.avatarURL})` }}
      />
      <div className="contact-details">
        <p>{contact.name}</p>
        <p>@{contact.handle}</p>
      </div>
      <button
        className="contact-remove"
        onClick={() => onDeleteContact(contact)}
      >
        Button
      </button>
    </li>
  );
}

export default ContactListItem;
