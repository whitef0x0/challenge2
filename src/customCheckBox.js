import React from 'react';
import { inputTypes } from 'winterfell';

class CustomCheckBoxInput extends inputTypes.checkboxOptionsInput {
  render() {
    return (
      <div className={this.props.classes.checkboxList}>
        {this.props.options.map(opt =>
          <div key={opt.value}
              className={this.props.classes.checkboxListItem}>
            <input type="checkbox"
              id={this.props.labelId + opt.value}
              name={this.props.name}
              aria-labelledby={this.props.labelId}
              value={opt.value}
              checked={this.state.value.indexOf(opt.value) > -1}
              className={this.props.classes.checkbox}
              required={this.props.required
                         ? 'required'
                         : undefined}
              onChange={this.handleChange.bind(this, opt.value)}
              onBlur={this.props.onBlur.bind(null, this.state.value)} />

            <label className={this.props.classes.checkboxLabel}
             htmlFor={this.props.labelId + opt.value}>
              {opt.text}
            </label>
          </div>
        )}
      </div>
    );
  }
};

export default CustomCheckBoxInput;
