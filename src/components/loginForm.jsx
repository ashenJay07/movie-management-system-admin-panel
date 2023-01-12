import React, { Component } from "react";
import Joi from "joi-browser";
import Form from "./common/form";

// inherits 'Form' class
class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {},
  }; // typeof(state) => object

  // username = React.createRef(); // used to create reference

  // Schema depends on each form (each form has unique schema)
  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  doSubmit = () => {
    // Call the server
    console.log("Form submitted & form data pass to the server");
  };

  render() {
    return (
      <div>
        <h2>Login</h2>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default LoginForm;
