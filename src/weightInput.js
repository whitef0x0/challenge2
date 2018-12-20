import React from 'react';
import { inputTypes } from 'winterfell';

class WeightInput extends inputTypes.textInput {
  render() {
    return (
      <div className="input-group weight-input-container">
        <input className="input-group-text" type="text"
               name={this.props.name}
               id={this.props.id}
               aria-labelledby={this.props.labelId}
               placeholder={this.props.placeholder}
               value={this.state.value}
               required={this.props.required
                           ? 'required'
                           : undefined}
               onChange={this.handleChange.bind(this)}
               onBlur={this.props.onBlur.bind(null, this.state.value)}
               onKeyDown={this.props.onKeyDown} />
        <div className="input-group-append">
          <span className="input-group-text" id="basic-addon2">kgs</span>
        </div>
      </div>
    );
  }
};

export default WeightInput;