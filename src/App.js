import React, { Component } from "react";
import ContactsList from "./ContactsList";
import * as contactsAPI from "./utils/ContactsAPI";

class App extends Component {
  constructor() {
    super();
    this.state = { contacts: [] };
    this.removeContact = this.removeContact.bind(this);
  }

  removeContact(contact) {
    this.setState((prevState) => ({
      ...prevState,
      contacts: prevState.contacts.filter((c) => c.id !== contact.id),
    }));
    contactsAPI.remove(contact);
  }

  componentDidMount() {
    contactsAPI.getAll().then((contacts) => {
      this.setState({ contacts });
    });
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
