import React from "react";

// in here this '...rest' = rest operator
const Input = ({ name, label, error, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        className="form-control"
        {...rest} // in here this '...rest' = spread operator
        type="text"
        autoFocus={name === "username" ? true : false}

        /*
        autoFocus attribute is a boolean attribute
        therefore, we can use any of these:
            + autoFocus (this means true)
            + autoFocus='' or autoFocus='autoFocus'
            + autoFocus=ture or autoFocus=false
        */
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
