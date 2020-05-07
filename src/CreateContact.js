import React, { Component } from "react";
import { Link } from "react-router-dom";
import ImageInput from "./ImageInput";
import serializeForm from "form-serialize";

class CreateContact extends Component {
  constructor() {
      super();
      this.handleSubmit = this.handleSubmit.bind(this);
    }

  handleSubmit(e) {
    e.preventDefault();
    const values = serializeForm(e.target, { hash: true });
    this.props.onCreateContact(values);
  }

  render() {
    return (
      <div>
        <Link to="/" className="close-create-contact" />
        <form onSubmit={this.handleSubmit} className="create-contact-form">
          <ImageInput
            maxHeight={64}
            className="create-contact-avatar-input"
            name="avatarURL"
          />
          <div className="create-contact-details">
            <input type="text" name="name" placeholder="Name" />
            <input type="text" name="handle" placeholder="Twitter handle" />
            <button>Add contact</button>
          </div>
        </form>
      </div>
    );
  }
}

export default CreateContact;
