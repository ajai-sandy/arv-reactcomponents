import React, { Component } from "react";

// Import common components
import { Input, Autocomplete, GridColumn } from "../../components";

class AutocompleteExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      autocompleteInputValue: "",
      inpList: [
        "Arrow",
        "Arrow-N",
        "Arrow-Y",
        "Arrow-L",
        "Arrow-B",
        "Arrow-Q",
        "Arrow-P",
        "Arrow-R",
        "Arrow-D",
        "Sephora",
        "Sephora-N",
        "Sephora-Y",
        "Sephora-L",
        "Sephora-B",
        "Sephora-Q",
        "Sephora-P",
        "Sephora-R",
        "Sephora-D",
        "Levis",
        "Levis-N",
        "Levis-Y",
        "Levis-L",
        "Levis-B",
        "Levis-Q",
        "Levis-P",
        "Levis-R",
        "Levis-D",
        "Gap",
        "Gap-N",
        "Gap-Y",
        "Gap-L",
        "Gap-B",
        "Gap-Q",
        "Gap-P",
        "Gap-R",
        "Gap-D",
      ],
    };

    this.onInpValChange = this.onInpValChange.bind(this);
    this.getInput = this.getInput.bind(this);
    this.getList = this.getList.bind(this);
    this.getAutocompleteSelection = this.getAutocompleteSelection.bind(this);
  }

  onInpValChange(e) {
    this.setState({
      autocompleteInputValue: e.target.value,
    });
  }

  getAutocompleteSelection(selectedValue) {
    this.setState({
      autocompleteInputValue: selectedValue,
    });
  }

  getInput() {
    const { autocompleteInputValue } = this.state;

    return (
      <Input
        className="nwc-inp-dash nwc-inp-sm"
        placeholder="Enter text"
        value={autocompleteInputValue}
        onChange={this.onInpValChange}
      />
    );
  }

  getList(item) {
    const inpVal = this.state.autocompleteInputValue;
    if (
      item.toLowerCase().indexOf((inpVal && inpVal.toLowerCase()) || "") > -1
    ) {
      return (
        <li className="nw-sample-autocomplete-list" key={item}>
          {item}
        </li>
      );
    }

    return null;
  }

  render() {
    const { inpList } = this.state;

    return (
      <GridColumn className="nwc-grid-col-sm-6 nwc-grid-col-md-4 nw-block nw-block-white">
        <div className="nw-sample-autocompletewrapper">
          <div className="nw-sample-autocomplete">
            <div className="nw-space-bottom">Autocomplete Example</div>
            <Autocomplete
              selectedIndex={-1}
              className="nw-autocomplete"
              inpList={inpList}
              getSelection={this.getAutocompleteSelection}
              renderInput={this.getInput}
              renderList={this.getList}
            />
          </div>
        </div>
      </GridColumn>
    );
  }
}

export default AutocompleteExample;
