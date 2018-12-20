import React from 'react';
import { inputTypes } from 'winterfell';

class CustomCheckBoxInput extends inputTypes.checkboxOptionsInput {
  render() {
    return (
      <div className={this.props.classes.checkboxList}>
        {this.props.options.map(opt =>
          <div key={opt.value}
              className="form-check form-check-inline btn btn-light"> {/*{this.props.classes.checkboxListItem}>*/}
            <input type="checkbox"
              name={this.props.name}
              aria-labelledby={this.props.labelId}
              value={opt.value}
              checked={this.state.value.indexOf(opt.value) > -1}
              className="form-check-input"/*{this.props.classes.checkbox}*/
              required={this.props.required
                         ? 'required'
                         : undefined}
              onChange={this.handleChange.bind(this, opt.value)}
              onBlur={this.props.onBlur.bind(null, this.state.value)} />

            <label className="form-check-label"/*{this.props.classes.checkboxLabel}*/
                   id={this.props.labelId}>
              {opt.text}
            </label>
          </div>
        )}
      </div>
    );
  }
};

export default CustomCheckBoxInput;
