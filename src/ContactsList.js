import React from "react";
import ContactListItem from "./ContactListItem";
import PropTypes from "prop-types";

class ContactsList extends React.Component {
  static propTypes = {
    contacts: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      query: "",
    };
    this.updateQuery = this.updateQuery.bind(this);
    this.clearQuery = this.clearQuery.bind(this);
  }

  updateQuery(query) {
    this.setState((prevState) => ({ ...prevState, query }));
  }

  clearQuery() {
    this.updateQuery("");
  }

  render() {
    const { contacts, onDeleteContact } = this.props;
    const { query } = this.state;
    const shownContacts =
      query === ""
        ? contacts
        : contacts.filter((c) =>
            c.name.toLowerCase().includes(query.toLowerCase())
          );
    return (
      <div>
        <div className="list-contacts">
          <div className="list-contacts-top">
            <input
              type="text"
              className="search-contacts"
              placeholder="Search Contacts"
              value={query}
              onChange={(event) => this.updateQuery(event.target.value)}
            />
          </div>
          {shownContacts.length !== contacts.length && (
            <div className="showing-contacts">
              <span>
                Now showing {shownContacts.length} of {contacts.length}
              </span>
              <button onClick={this.clearQuery} >Show All</button>
            </div>
          )}
          <ul className="contact-list">
            {shownContacts.map((contact) => (
              <ContactListItem
                contact={contact}
                key={contact.id}
                onDeleteContact={onDeleteContact}
              />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default ContactsList;
