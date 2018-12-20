import React from 'react';
import { inputTypes } from 'winterfell';

class CustomRadioInput extends inputTypes.radioOptionsInput {
  render() {
    return (
      <div className={this.props.classes.radioList}>
        {this.props.options.map(opt =>
          <div key={opt.value}
              className="form-check form-check-inline btn btn-light"/*{this.props.classes.radioListItem}*/>
   					<input type="radio"
             name={this.props.name}
             aria-labelledby={this.props.labelId}
             checked={this.state.value == opt.value}
             className="form-check-input"/*{this.props.classes.radio}*/
             required={this.props.required
                         ? 'required'
                         : undefined}
             onChange={this.handleChange.bind(this, opt.value)}
             onBlur={this.props.onBlur.bind(null, this.state.value)} />
            <label className="form-check-label"/*{this.props.classes.radioLabel}*/
                   id={this.props.labelId}>
              {opt.text}
            </label>
          </div>
        )}
      </div>
    );
  }

};

export default CustomRadioInput;