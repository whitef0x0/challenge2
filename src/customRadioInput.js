import React from 'react';
import { inputTypes } from 'winterfell';

class CustomRadioInput extends inputTypes.radioOptionsInput {
  render() {
    return (
      <div className={this.props.classes.radioList}>
        {this.props.options.map(opt =>
          <div key={opt.value}
              className={this.props.classes.radioListItem}>
   					<input type="radio"
   					 id={this.props.labelId + opt.value}
             name={this.props.name}
             aria-labelledby={this.props.labelId}
             checked={this.state.value === opt.value}
             className={this.props.classes.radio}
             required={this.props.required
                         ? 'required'
                         : undefined}
             onChange={this.handleChange.bind(this, opt.value)}
             onBlur={this.props.onBlur.bind(null, this.state.value)} />
            <label className={this.props.classes.radioLabel}
             htmlFor={this.props.labelId + opt.value}>
              {opt.text}
            </label>
          </div>
        )}
      </div>
    );
  }

};

export default CustomRadioInput;