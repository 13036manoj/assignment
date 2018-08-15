import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Select, Input, Button } from "antd";
import "antd/dist/antd.css";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import App2 from "./App2";
import {
  pushValueInStore,
  validateOnNext,
  initialLoading
} from "../src/action";

const Option = Select.Option;

class App1 extends Component {
  constructor(props) {
    super(props);
    this.props.actions.initialLoading();
  }
  // state = {
  //   sc_name: "",
  //   sc_descrption: "",
  //   renderApp1: true,
  //   renderApp2: false
  // };
  handleChange = value => {
    console.log(`selected ${value}`);
    this.props.actions.pushValueInStore("sc_name", value);
  };

  handleBlur = value => {
    console.log("blur", value);
  };

  handleFocus = () => {
    console.log("focus");
  };
  inputTextChange = event => {
    console.log("input text", event.target.value);
    this.props.actions.pushValueInStore("sc_description", event.target.value);
  };
  onNext = () => {
    this.props.actions.validateOnNext();
  };
  static getDerivedStateFromProps(props, state) {
    console.log("this.props.history", props.history);
    if (!props.renderApp1) {
      console.log("this.props.history", props.history);

      props.history.push("/last");
    }
  }
  render() {
    console.log("printing props", this.props);
    return (
      <div className="body_container">
        <div class="put_in_center">
          <div
            style={{
              // display: "flex",
              // justifyContent: "center",
              // alignItems: "center",
              height: "128px"
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <div>
                <div>Scenario Name</div>
                <Select
                  showSearch
                  style={{ width: 200 }}
                  placeholder="Select a person"
                  optionFilterProp="children"
                  onChange={this.handleChange}
                  onFocus={this.handleFocus}
                  onBlur={this.handleBlur}
                  filterOption={(input, option) =>
                    option.props.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                >
                  <Option value="end_customer1">end_customer1</Option>
                  <Option value="end_customer2">end_customer2</Option>
                  <Option value="end_customer3">end_customer3</Option>
                </Select>
                {this.props.nameError && (
                  <div className="warning"> please Select Scenario Name </div>
                )}
              </div>
              <div>
                <div>Scenario descrition</div>
                <Input
                  className="input_class"
                  placeholder="Scenario descrition"
                  onChange={this.inputTextChange}
                />
                {this.props.descriptionError && (
                  <div className="warning">
                    please Select Scenario Description
                  </div>
                )}
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                marginRight: "36px"
              }}
            >
              <Button
                className="button_css"
                type="primary"
                onClick={() => this.onNext()}
              >
                Next
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// Copyright (c) 2017-present Mattermost, Inc. All Rights Reserved.
// See License.txt for license information.

function mapStateToProps(state) {
  return {
    ...state.redux_form
    // nameError: state.nameError,
    // descriptionError: state.descriptionError,
    // docTypeError: state.docTypeError,
    // docListError: state.docListError,
    // renderApp1: state.renderApp1
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        pushValueInStore,
        validateOnNext,
        initialLoading
      },
      dispatch
    )
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App1);
