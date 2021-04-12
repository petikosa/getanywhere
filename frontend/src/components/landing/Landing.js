import React, { useEffect } from 'react';
import logo from '../../images/logo.png';
import { Button } from 'shards-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import google from '../../images/google.svg';
import { useHistory } from 'react-router-dom';

export default function Landing() {
  useEffect(() => {
    console.log('mounted or updated');
    fetch('http://localhost:8080/').then((result) =>
      console.log('this is the response: ', result)
    );
  });

  let history = useHistory();

  return (
    <div className="Landing-wrapper">
      <div className="Landing">
        <div className="Landing-content-wrapper">
          <div className="Landing-content">
            <div className="Landing-logowrap">
              <img className="Landing-logo" src={logo} alt="Logo" />
            </div>
            <h1>Connect with new friends anywhere in the world</h1>
            <div className="Landing-login">
              <div className="Landing-form">
                <Button
                  pill
                  className="Landing-button"
                  onClick={() => history.push('/register')}
                >
                  Register
                </Button>
                <Button pill className="Landing-button" onClick={() => {}}>
                  Sign In
                </Button>
              </div>
              <div className="Landing-social">
                <span className="Landing-alternative">Or sing in with</span>
                <Button className="Landing-social-fb" size="sm" outline pill>
                  <FontAwesomeIcon icon={faFacebook} /> facebook
                </Button>
                <Button className="Landing-social-g" size="sm" outline pill>
                  <img
                    className="Landing-social-g-svg"
                    src={google}
                    alt="google"
                  />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
