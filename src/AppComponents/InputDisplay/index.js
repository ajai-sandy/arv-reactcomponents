import React, { Component } from "react";
import { GridRow, GridColumn, Input } from "../../components";
import ShowCode from "../ShowCode";

const componentFilePath = "InputDisplay/index.js";

class InputDisplay extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputTxt: "",
    };

    this.inpChange = this.inpChange.bind(this);
  }

  inpChange(e) {
    this.setState({
      inputTxt: e.target.value,
    });
  }

  render() {
    const { inputTxt } = this.state;

    return (
      <GridColumn className="nw-block-wrapper nwc-grid-col-sm-12">
        <h1 className="nw-header">Inputs</h1>
        <ShowCode fileName={componentFilePath} />
        <GridRow>
          <GridColumn className="nwc-grid-col-sm-6 nw-block nw-block-white">
            <h2>Color Variants</h2>
            <div className="nw-div-wrapper">
              <Input
                className="nwc-inp-primary-txt"
                placeholder="Enter Text"
                value={inputTxt}
                onChange={this.inpChange}
              />
              .nwc-inp-primary-txt
            </div>
            <div className="nw-div-wrapper">
              <Input
                className="nwc-inp-dark-background"
                placeholder="Enter Text"
                value={inputTxt}
                onChange={this.inpChange}
              />
              .nwc-inp-dark-background
            </div>
            <div className="nw-div-wrapper">
              <Input
                placeholder="Enter Text"
                value={inputTxt}
                onChange={this.inpChange}
              />
            </div>
            <div className="nw-div-wrapper">
              <Input
                className="nwc-inp-primary"
                placeholder="Enter Text"
                value={inputTxt}
                onChange={this.inpChange}
              />
              .nwc-inp-primary
            </div>
            <div className="nw-div-wrapper">
              <Input
                className="nwc-inp-secondary"
                placeholder="Enter Text"
                value={inputTxt}
                onChange={this.inpChange}
              />
              .nwc-inp-secondary
            </div>
            <div className="nw-div-wrapper">
              <Input
                className="nwc-inp-notification"
                placeholder="Enter Text"
                value={inputTxt}
                onChange={this.inpChange}
              />
              .nwc-inp-notification
            </div>
            <div className="nw-div-wrapper">
              <Input
                className="nwc-inp-success"
                placeholder="Enter Text"
                value={inputTxt}
                onChange={this.inpChange}
              />
              .nwc-inp-success
            </div>
            <div className="nw-div-wrapper">
              <Input
                className="nwc-inp-warning"
                placeholder="Enter Text"
                value={inputTxt}
                onChange={this.inpChange}
              />
              .nwc-inp-warning
            </div>
            <div className="nw-div-wrapper">
              <Input
                className="nwc-inp-danger"
                placeholder="Enter Text"
                value={inputTxt}
                onChange={this.inpChange}
              />
              .nwc-inp-danger
            </div>
          </GridColumn>
          <GridColumn className="nwc-grid-col-sm-6 nw-block nw-block-white">
            <h2>Size Variants</h2>
            <div className="nw-div-wrapper">
              <Input
                className="nwc-inp-xxl"
                placeholder="Enter Text"
                value={inputTxt}
                onChange={this.inpChange}
              />
              .nwc-inp-xxl
            </div>
            <div className="nw-div-wrapper">
              <Input
                className="nwc-inp-xl"
                placeholder="Enter Text"
                value={inputTxt}
                onChange={this.inpChange}
              />
              .nwc-inp-xl
            </div>
            <div className="nw-div-wrapper">
              <Input
                className="nwc-inp-lg"
                placeholder="Enter Text"
                value={inputTxt}
                onChange={this.inpChange}
              />
              .nwc-inp-lg
            </div>
            <div className="nw-div-wrapper">
              <Input
                className="nwc-inp-normal"
                placeholder="Enter Text"
                value={inputTxt}
                onChange={this.inpChange}
              />
              .nwc-inp-normal
            </div>
            <div className="nw-div-wrapper">
              <Input
                className="nwc-inp-sm"
                placeholder="Enter Text"
                value={inputTxt}
                onChange={this.inpChange}
              />
              .nwc-inp-sm
            </div>
            <div className="nw-div-wrapper">
              <Input
                className="nwc-inp-xs"
                placeholder="Enter Text"
                value={inputTxt}
                onChange={this.inpChange}
              />
              .nwc-inp-xs
            </div>
            <div className="nw-div-wrapper">
              <Input
                className="nwc-inp-xxs"
                placeholder="Enter Text"
                value={inputTxt}
                onChange={this.inpChange}
              />
              .nwc-inp-xxs
            </div>
          </GridColumn>
        </GridRow>
        <GridRow>
          <GridColumn className="nwc-grid-col-sm-6 nw-block nw-block-white">
            <div className="nw-div-wrapper">
              <Input
                className="is-invalid"
                placeholder="On Invalid Input"
                value={inputTxt}
                onChange={this.inpChange}
              />
              &nbsp;&nbsp;
              <Input
                className="is-invalid is-untouched"
                placeholder="Invalid Untouched Input"
                value={inputTxt}
                onChange={this.inpChange}
              />
            </div>
            <div className="nw-div-wrapper">
              <Input
                placeholder="Disabled Input"
                value={inputTxt}
                onChange={this.inpChange}
                disabled
              />
            </div>
          </GridColumn>
        </GridRow>
      </GridColumn>
    );
  }
}

export default InputDisplay;
