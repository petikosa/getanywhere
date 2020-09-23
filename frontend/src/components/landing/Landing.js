import React, { useState } from "react";
import logo from "../../images/logo.png";
import { FormInput, Button } from "shards-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import google from "../../images/google.svg";
import Login from './Login';
import { useHistory } from "react-router-dom";

export default function Landing() {
  const [toggleLogin, setToggleLogin] = useState(false);
  let history = useHistory();

  const cancelPopup = () => {
    setToggleLogin(false);
    console.log('cancelPopup in Landing');
  }

  let loginPopup;
  if (toggleLogin) {
    loginPopup = <Login onClick={cancelPopup}/>;
  }
  return (
    <div className="Landing">
      {loginPopup}
      <div className="Landing-content-wrapper">
        <img className="Landing-logo" src={logo} alt="Logo" />
        {!toggleLogin && <Button pill className="Landing-signin" onClick={() => setToggleLogin(true)}>
          Sign In
        </Button>}
        <div className="Landing-content">
          <h1>Connect with new friends anywhere in the world</h1>
          <div className="Landing-login">
            <div className="Landing-form">
              <FormInput className="Landing-input" placeholder="Your e-mail" />
              <Button pill className="Landing-button" onClick={() => history.push('/register')}>
                Register
              </Button>
            </div>
            <div className="Landing-social">
              <span className="Landing-alternative">Or sing in with</span>
              <Button
                className="Landing-social-fb"
                size="sm"
                outline
                pill
              >
                <FontAwesomeIcon icon={faFacebook} /> facebook
              </Button>
              <Button className="Landing-social-g" size="sm" outline pill>
                <img className="Landing-social-g-svg" src={google} alt="google" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
