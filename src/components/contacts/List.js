import React from "react";
import axios from "../../config/axios";
import { Link } from "react-router-dom";

class ContactList extends React.Component {
  constructor() {
    super();
    this.state = {
      contacts: []
    };
  }
  componentDidMount() {
    console.log("component did Mount");
    axios
      .get("/users/contacts", {
        headers: { "x-auth": localStorage.getItem("token") }
      })
      .then(response => {
        const contacts = response.data;
        // contacts.map(c => console.log(c._id));

        this.setState({ contacts });
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleRemove = id => {
    axios.delete(`/users/contacts/${id}`).then(
      this.setState(prevState => ({
        contacts: prevState.contacts.filter(contact => contact._id !== id)
      }))
    );
  };

  //
  render() {
    return (
      <div>
        <h2>
          <em>List Of Contacts - {this.state.contacts.length}</em>
        </h2>
        <ul>
          {this.state.contacts.map(contact => {
            // console.log(contact);
            return (
              <li key={contact._id}>
                <Link to={`/users/contacts/${contact._id}`}>
                  <em> {contact.name} </em>
                </Link>
                <button
                  onClick={() => {
                    const confirmRemove = window.confirm("Are you sure ?");
                    if (confirmRemove) {
                      console.log(contact._id);
                      this.handleRemove(contact._id);
                    }
                  }}
                >
                  <em>remove</em>
                </button>
              </li>
            );
          })}
        </ul>
        {/* <button type="button">1</button>|<button type="button">2</button>|
        <button type="button">3</button>|<button type="button">4</button>|
        <button type="button">5</button>|<button type="button">6</button>| */}
        <br />
        <Link to="/users/contacts/new">
          <em>Add Contacts</em>
        </Link>
      </div>
    );
  }
}
export default ContactList;
