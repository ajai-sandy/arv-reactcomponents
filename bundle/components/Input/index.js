import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Utils from "../_jsUtils";
import Label from "../Label";

// import for Page
import { restrictVal, validateValue } from "./methods";

class Input extends PureComponent {
  constructor(props) {
    super(props);

    this.getValidatedOutput = this.getValidatedOutput.bind(this);
    this.inputId = `${Math.round(Math.random() * 10 ** 10)}`;
  }

  get cloneClassName() {
    const { type, checked, disabled, className } = this.props;
    const isCheckedClass = checked ? "is-checked" : "";
    const isDisabled = disabled ? "is-disabled" : "";
    const additionalClasses = `${className} ${isCheckedClass} ${isDisabled}`;
    switch (type) {
      case "checkbox":
        return `nwc-inp-checkbox ${additionalClasses}`;
      case "radio":
        return `nwc-inp-radio ${additionalClasses}`;
      /* istanbul ignore next */
      default:
        return "";
    }
  }

  get isCheckTypes() {
    const { type } = this.props;
    switch (type) {
      case "checkbox":
      case "radio":
        return true;
      default:
        return false;
    }
  }

  getValidatedOutput(value) {
    const { type, maxLength, validateWithPattern } = this.props;

    const newValue = restrictVal(value, type, maxLength);

    const isValidObj = validateValue(newValue, validateWithPattern);
    const { isValid, errorMsg } = isValidObj;

    return {
      value: newValue,
      isValid,
      errorMsg,
    };
  }

  render() {
    const {
      id,
      className,
      type,
      inputRef,
      validateWithPattern,
      ...otherProps
    } = this.props;

    if (!this.isCheckTypes) {
      return (
        <input
          id={id || this.inputId}
          className={`nwc-inp  ${className}`}
          type={type}
          tabIndex="0"
          ref={inputRef}
          {...otherProps}
        />
      );
    }

    return (
      <Label className="nwc-inp-container" htmlFor={id || this.inputId}>
        <span className="nwc-inp-hiddenwrapper">
          <input
            id={id || this.inputId}
            type={type}
            tabIndex="0"
            ref={inputRef}
            {...otherProps}
          />
        </span>
        <i className={`${this.cloneClassName}`} />
      </Label>
    );
  }
}

Input.defaultProps = {
  id: null,
  name: null,
  className: "",
  type: "text",
  placeholder: null,
  value: null,
  checked: null,
  maxLength: null,
  inputRef: Utils.noop,
  disabled: false,
  validateWithPattern: null,
};

Input.propTypes = {
  id: PropTypes.string,
  name: Utils.customPropTypes.Input, // eslint-disable-line react/no-typos
  className: PropTypes.string,
  type: PropTypes.string,
  placeholder: Utils.customPropTypes.Input, // eslint-disable-line react/no-typos
  value: Utils.customPropTypes.Input, // eslint-disable-line react/no-typos
  checked: Utils.customPropTypes.Input, // eslint-disable-line react/no-typos
  onChange: PropTypes.func.isRequired,
  maxLength: PropTypes.number,
  inputRef: PropTypes.func,
  disabled: PropTypes.bool,
  validateWithPattern: PropTypes.arrayOf(
    PropTypes.shape({
      pattern: PropTypes.instanceOf(RegExp),
      msg: PropTypes.string,
    }),
  ),
};

export default Input;
