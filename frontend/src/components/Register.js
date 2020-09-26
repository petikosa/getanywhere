import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Form, FormInput, Button, FormRadio } from "shards-react";

function Register() {
  const history = useHistory();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    city: '',
    country: '',
    dateBirth: '',
    sex: '',
  });

  const handleSubmit = (event) => {
    console.log(formData);
    event.preventDefault();
  }

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
  const onChangeSex = (sex) => setFormData({ ...formData, sex: sex});

  return (
    <div className="Register">
      <h1 className="Register-title">Register</h1>
        <Form onSubmit={handleSubmit}>
      <div className="Register-form">
          <div className="Register-form-left">
            <FormInput className="Register-form-el" required onChange={onChange} name="email" type="email" placeholder="E-mail" />
            <FormInput className="Register-form-el" required onChange={onChange} name="password" type="password" placeholder="Password" />
            <FormInput className="Register-form-el" required onChange={onChange} name="confirmPassword" type="password" placeholder="Confirm password" />
            <FormInput className="Register-form-el" required onChange={onChange} name="firstName" type="text" placeholder="First name" />
            <FormInput className="Register-form-el" required onChange={onChange} name="lastName" type="text" placeholder="Last name" />
          </div>
          <div className="Register-form-right">
            <FormInput className="Register-form-el" required onChange={onChange} name="city" type="text" placeholder="City" />
            <FormInput className="Register-form-el" required onChange={onChange} name="country" type="text" placeholder="Country" />
            Sex
            <div className="Register-form-right-sex">
              <FormRadio className="Register-form-el-sex" name="sex" checked={formData.sex==='Male'} onChange={() => onChangeSex('Male')}>Male</FormRadio>
              <FormRadio className="Register-form-el-sex" name="sex" checked={formData.sex==='Female'} onChange={() => onChangeSex('Female')}>Female</FormRadio>
              <FormRadio className="Register-form-el-sex" name="sex" checked={formData.sex==='Other'} onChange={() => onChangeSex('Other')}>Other</FormRadio>
            </div>
            Date of birth
            <FormInput className="Register-form-el-date" required onChange={onChange} name="dateBirth" type="date" placeholder="Date of birth" />
          </div>
      </div>
          <div className="Register-buttons">
            <Button type="submit" className="Register-buttons-left" pill>Register</Button>
            <Button className="Register-buttons-right" pill outline onClick={() => history.push("/")}>Cancel</Button>
          </div>
        </Form>
    </div>
  );
}

export default Register;
