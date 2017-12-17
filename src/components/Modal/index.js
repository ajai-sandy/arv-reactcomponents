import { Component } from 'react';
import PropTypes from 'prop-types';

import './styles/_index.scss';
import {
  renderModal,
  openModal,
  closeModal,
} from './methods';

let { scrollY } = window;

class Modal extends Component {
  static preventEventPropagation(e) {
    e.stopPropagation();
  }

  static fixScrollFn() {
    ({ scrollY } = window);
    setTimeout(() => {
      const bodyElem = document.querySelector('body');
      bodyElem.classList.toggle('nwc-hide-scrollbar', true);
      bodyElem.style.top = `-${scrollY}px`;
    }, 0, false);
  }

  static unFixScrollFn() {
    const bodyElem = document.querySelector('body');
    bodyElem.classList.toggle('nwc-hide-scrollbar', false);
    bodyElem.style.top = null;
    if (scrollY) {
      window.scrollTo(0, scrollY);
    }
  }

  constructor(props) {
    super(props);

    this.state = {
      'isOpen': false, // eslint-disable-line react/no-unused-state
    };

    this.openModal = openModal.bind(this);
    this.closeModal = closeModal.bind(this);
  }

  componentWillMount() {
    const modalContainer = document.createElement('div');
    modalContainer.className = 'nwc-modal-container';
    document.querySelectorAll('body')[0].appendChild(modalContainer);
  }

  componentDidUpdate() {
    renderModal.bind(this)();
  }

  render() {
    return null;
  }
}

Modal.defaultProps = {
  className: '',
};

Modal.propTypes = {
  className: PropTypes.string, // eslint-disable-line react/no-unused-prop-types
  children: PropTypes.oneOfType([ // eslint-disable-line react/no-unused-prop-types
    PropTypes.node,
    PropTypes.string,
  ]).isRequired,
};

export default Modal;
