import React, { Component } from 'react';
import PropTypes from 'prop-types';

// import for Page
import { renderAutocompleteInput, renderListItems } from './methods';
import './_index.scss';

let renderAutocompleteInputFn;
let renderListItemsFn;

class Autocomplete extends Component {
  constructor(props) {
    super(props);

    this.listNode = {};

    renderAutocompleteInputFn = renderAutocompleteInput.bind(this);
    renderListItemsFn = renderListItems.bind(this);
  }

  render() {
    const {
      className,
      inpList,
      getSelection,
      renderInput,
      renderList,
      ...otherProps
    } = this.props;

    const elem = renderInput();

    return (
      <div
        className={`nwc-autocomplete ${className}`}
        ref={(c) => { this.autocompleteNode = c; }}
        {...otherProps}
      >
        {renderAutocompleteInputFn(elem)}
        {renderListItemsFn(elem.props.value, inpList, renderList)}
      </div>
    );
  }
}

Autocomplete.defaultProps = {
  className: '',
  getSelection: () => {},
};

Autocomplete.propTypes = {
  className: PropTypes.string,
  inpList: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.arrayOf(PropTypes.string),
  ]).isRequired,
  getSelection: PropTypes.func,
  renderInput: PropTypes.func.isRequired,
  renderList: PropTypes.func.isRequired,
  // children: PropTypes.oneOfType([
  //   PropTypes.arrayOf(PropTypes.node),
  //   PropTypes.node,
  // ]),
};

export default Autocomplete;
