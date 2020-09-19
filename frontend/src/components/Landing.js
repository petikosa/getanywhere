import React from "react";
import logo from "../images/logo.png";
import { FormInput, Button } from "shards-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import google from "../images/google.svg"

export default function Landing() {
  return (
    <div className="Landing">
      <div className="Landing-conent-wrapper">
        <img className="Landing-logo" src={logo} alt="Logo" />
        <Button pill className="Landing-signin">
          Sign In
        </Button>
        <div className="Landing-conent">
          <h1>Connect with new friends anywhere in the world</h1>
          <div className="Landing-login">
            <div className="Landing-form">
              <FormInput placeholder="Your e-mail" />
              <Button pill className="Landing-button">
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
