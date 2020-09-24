import React from "react";
import { useHistory } from "react-router-dom";
import { FormInput, Button } from "shards-react";

function Register() {
  let history = useHistory();
  return (
    <div className="Register">
      <h1 className="Register-title">Register</h1>
      <div className="Register-form">
        <FormInput className="Register-form-el" placeholder="E-mail" />
        <FormInput className="Register-form-el" placeholder="Password" />
        <FormInput className="Register-form-el" placeholder="Confirm password" />
        <FormInput className="Register-form-el" placeholder="Name" />
        <FormInput className="Register-form-el" placeholder="City" />
        <FormInput className="Register-form-el" placeholder="Country" />
        <FormInput className="Register-form-el" placeholder="Date of birth" type="date" />
      </div>
      <div className="Register-buttons">
        <Button className="Register-buttons-left" pill>Register</Button>
        <Button className="Register-buttons-right" pill outline onClick={() => history.push("/")}>Cancel</Button>
      </div>
    </div>
  );
}

export default Register;
