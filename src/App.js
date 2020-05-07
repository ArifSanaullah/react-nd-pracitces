import React, { Component } from "react";
import ContactsList from "./ContactsList";
import * as contactsAPI from "./utils/ContactsAPI";
import CreateContact from "./CreateContact";
import { Route } from "react-router-dom";

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

  createContact(contact) {
    contactsAPI.create(contact).then((c) => {
      this.setState((prevState) => ({
        ...prevState,
        contacts: [...prevState.contacts, c],
      }));
    });
  }

  componentDidMount() {
    contactsAPI.getAll().then((contacts) => {
      this.setState({ contacts });
    });
  }

  render() {
    return (
      <div>
        <Route
          path="/"
          exact
          render={() => (
            <ContactsList
              contacts={this.state.contacts}
              onDeleteContact={this.removeContact}
            />
          )}
        />
        <Route
          path="/create"
          render={({ history }) => (
            <CreateContact
              onCreateContact={(contact) => {
                this.createContact(contact);
                history.push("/");
              }}
            />
          )}
          exact
        />
      </div>
    );
  }
}

export default App;
