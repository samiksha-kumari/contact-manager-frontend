import React from "react";

class ContactForm extends React.Component {
  constructor(props) {
    //props
    super();
    this.state = {
      name: props.customer ? props.customer.name : "",
      email: props.customer ? props.customer.email : "",
      mobile: props.customer ? props.customer.mobile : ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const formData = {
      name: this.state.name,
      email: this.state.email,
      mobile: this.state.mobile
      //id: this.props.customer._id
    };

    this.props.contact && (formData.id = this.props.contact._id);
    this.props.handleContactSubmit(formData);
    // axios.post("/users/contacts", formData).then(contacts => {
    //   this.props.history.push("/users/contacts");
    // });
    console.log(formData);
  };
  componentWillReceiveProps(nextProps) {
    console.log("form customer will receive props", nextProps);
    const { name, email, mobile } = nextProps.contact;
    this.setState({ name, email, mobile });
  }

  render() {
    console.log("form contact render");
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            <em> Name </em>
            <input
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
              name="name"
            />
          </label>{" "}
          <br />
          <label>
            <em> Email </em>
            <input
              type="text"
              value={this.state.email}
              onChange={this.handleChange}
              name="email"
            />
          </label>{" "}
          <br />
          <label>
            <em> Mobile </em>
            <input
              type="text"
              value={this.state.mobile}
              onChange={this.handleChange}
              name="mobile"
            />
          </label>
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}
export default ContactForm;
