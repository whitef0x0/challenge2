import React, { Component } from 'react';
import Winterfell from 'winterfell';
// import logo from './logo.svg';
import './App.css';
import schema from './schema';
import CustomCheckBoxInput from './customCheckBox';
import CustomRadioInput from './customRadioInput';
import WeightInput from './weightInput';

Winterfell.addInputType('customCheckbox', CustomCheckBoxInput);
Winterfell.addInputType('customRadio', CustomRadioInput);
Winterfell.addInputType('weightInput', WeightInput);

//Add custom validation method for legal agreement
Winterfell
  .addValidationMethod('hasAccepted', (actualValue, acceptedValue) => {
    return (actualValue === "accepted");
  })
Winterfell
  .addErrorMessage('hasAccepted', 'Please accept the agreement before continuing');

class App extends Component {
  render() {
    return (
      <div className="container py-5 text-left">
        <div className="row">
          <div className="nav">
            <div className="nav-item">
              <a className="nav-link" href="/">
                <span>Medical History > </span>
                <b>Symptoms</b>
              </a>
            </div>
          </div>
        </div>

        <Winterfell schema={schema}/>

        <div className="nav-bottom">
          <div className="container">
            <div className="row">
              <div className="col-3">
                <a className="navbar-brand" href="https://prenuvo.com">prenuvo</a>
              </div>
              <div className="col-9 footer-list-container">
                <ul className="footer-list">
                  <li>
                    <a className="footer-link " href="/contact-us">contact us</a>
                  </li>
                  <li>
                    <a className="footer-link " href="/blog">blog</a>
                  </li>
                  <li>
                    <a className="footer-link " href="/privacy">privacy</a>
                  </li>
                  <li>
                    <a className="footer-link " href="/terms">terms</a>
                  </li>
                  <li>
                    © Copyright 2018
                  </li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="col navbar-tagline">
                Made with love and determination to save the world one early medical diagnosis at a time
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
