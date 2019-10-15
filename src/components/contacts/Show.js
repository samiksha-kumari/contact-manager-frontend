import React from "react";
import axios from "../../config/axios";
import { Link } from "react-router-dom";

export default class ContactShow extends React.Component {
  constructor() {
    super();
    this.state = {
      contact: {}
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    axios
      .get(`/users/contacts/${id}`, {
        headers: {
          "x-auth": localStorage.getItem("token")
        }
      })
      .then(response => {
        const contact = response.data;
        this.setState({ contact });
        console.log(contact);
      })

      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <h2>
          {this.state.contact.name} - {this.state.contact.email}
        </h2>
        <Link to={`/users/contacts/edit/${this.state.contact._id}`}>
          <em>edit</em>
        </Link>
      </div>
    );
  }
}
