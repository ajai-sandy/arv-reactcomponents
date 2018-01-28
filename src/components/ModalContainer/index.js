import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Close from "../Close";
import Utils from "../_jsUtils";

import { setFocus, onEscapeClose } from "./methods";

let onEscapeCloseFn;

class ModalContainer extends PureComponent {
  constructor(props) {
    super(props);

    onEscapeCloseFn = onEscapeClose.bind(this);
  }

  componentDidMount() {
    if (!this.props.preventfix) {
      Utils.fixScroll();
    }
  }

  componentWillUnmount() {
    Utils.unFixScroll();
  }

  render() {
    const {
      className,
      children,
      onClose,
      preventfix,
      ...otherProps
    } = this.props;

    return (
      <div
        role="button"
        className={`nwc-modal-container ${className}`}
        tabIndex={0}
        onClick={onClose}
        onKeyDown={onEscapeCloseFn}
        ref={setFocus}
        {...otherProps}
      >
        <div
          role="button"
          className="nwc-modal nwc-custom-scrollbar"
          tabIndex={0}
          onClick={Utils.preventEventPropagation}
          onKeyDown={null}
        >
          <Close
            className="nwc-close-normal nwc-modal-close"
            onClick={onClose}
          />
          {children}
        </div>
      </div>
    );
  }
}

ModalContainer.defaultProps = {
  className: "",
  preventfix: false,
};

ModalContainer.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  onClose: PropTypes.func.isRequired,
  preventfix: PropTypes.bool,
};

export default ModalContainer;
