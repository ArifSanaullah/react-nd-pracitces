import React, { Component } from "react";
import ContactsList from "./ContactsList";

const contacts = [
  {
    id: "karen",
    name: "Karen Isgrigg",
    handle: "karen_isgrigg",
    avatarURL: "http://localhost:5001/karen.jpg",
  },
  {
    id: "richard",
    name: "Richard Kalehoff",
    handle: "richardkalehoff",
    avatarURL: "http://localhost:5001/richard.jpg",
  },
  {
    id: "tyler",
    name: "Tyler McGinnis",
    handle: "tylermcginnis",
    avatarURL: "http://localhost:5001/tyler.jpg",
  },
];

class App extends Component {
  constructor() {
    super();
    this.state = { contacts };
    this.removeContact = this.removeContact.bind(this);
  }

  removeContact(contactID) {
    this.setState((prevState) => ({
      ...prevState,
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactID
      ),
    }));
  }

  render() {
    return (
      <ContactsList
        contacts={this.state.contacts}
        onDeleteContact={this.removeContact}
      />
    );
  }
}

export default App;
