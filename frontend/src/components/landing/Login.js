import React from 'react'
import { FormInput, Button } from "shards-react";

export default function Login(props) {
  const cancelPopup = () => {
    props.onClick(false);
  }

  return (
    <div className="Login">
      <FormInput className="Login-input" placeholder="E-mail" />
      <FormInput className="Login-input" placeholder="Password" />
      <div className='Login-buttons'>
        <Button pill>Sign In</Button>
        <Button className="Login-buttons-cancel" pill outline onClick={cancelPopup}>Cancel</Button>
      </div>
    </div>
  )
}
