import React, { Component } from 'react';
import Winterfell from 'winterfell';
// import logo from './logo.svg';
import './App.css';
import schema from './schema';
import CustomCheckBoxInput from './customCheckBox';
import CustomRadioInput from './customRadioInput';

Winterfell.addInputType('customCheckbox', CustomCheckBoxInput);
Winterfell.addInputType('customRadio', CustomRadioInput);

class App extends Component {
  render() {
    return (
      <div className="App">
        {/*
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1> Challenge2 Form </h1> 
        </header>
        */}
        <div class="container py-5">
          <form class="text-left">
            <Winterfell schema={schema}/>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
