import React from "react";
import ContactForm from "./Form";
import axios from "../../config/axios";

class ContactNew extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {}
    };
  }

  handleContactSubmit = contact => {
    console.log(contact, "contact listed");
    axios
      .post("/users/contacts", contact, {
        headers: {
          "x-auth": localStorage.getItem("token")
        }
      })
      .then(response => {
        if (response.data.errors) {
          window.alert(response.data.message);
          // console.log("validation error", response.data.errors);
        } else {
          console.log("success");
          this.props.history.push("/contacts");
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    // method
    return (
      <div>
        <h2>
          <em> Add Contacts </em>
        </h2>
        <ContactForm handleContactSubmit={this.handleContactSubmit} />
      </div>
    );
  }
}
export default ContactNew;
