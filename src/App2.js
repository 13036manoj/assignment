import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Select, Input, Button } from "antd";
import "antd/dist/antd.css";
import { Checkbox, Row, Col } from "antd";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  pushValueInStore,
  validateOnNext,
  initialLoading,
  validateOnFinish
} from "../src/action";

const Option = Select.Option;

class App2 extends Component {
  constructor(props) {
    super(props);
  }

  onChange = checkedValues => {
    console.log("checked = ", checkedValues);
    this.props.actions.pushValueInStore("docList", checkedValues);
  };
  handleChange = value => {
    this.props.actions.pushValueInStore("docType", value);
    console.log(`selected ${value}`);
  };

  handleBlur = () => {
    console.log("blur");
  };

  handleFocus = () => {
    console.log("focus");
  };
  onFinished = () => {
    this.props.actions.validateOnFinish();
  };
  static getDerivedStateFromProps(props, state) {
    console.log("this.props.history", props.history);
    if (props.renderApp1) {
      console.log("1st not completed", props.history);
      props.history.push("/");
    }
    if (!props.renderApp2) {
      console.log("this.props.history", props.history);
      props.history.push("/welcome");
    }
  }
  render() {
    console.log("check if props chenge", this.props);
    return (
      <div className="body_container">
        <div class="put_in_center">
          <div
            style={{
              // display: "flex",
              // justifyContent: "center",
              // alignItems: "center",
              height: "200px"
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <div>
                <div>Scenario Name</div>
                <div>{this.props.sc_name}</div>
              </div>
              <div>
                <div>Scenario descrition</div>
                <div>{this.props.sc_description}</div>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                marginTop: "20px"
              }}
            >
              <div>
                <div>Document Type</div>
                <Select
                  showSearch
                  style={{ width: 200 }}
                  placeholder="Select Document Type"
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
                  <Option value="end_customer1">Qoute1</Option>
                  <Option value="end_customer2">Quote2</Option>
                  <Option value="end_customer3">Quote3</Option>
                </Select>
                {this.props.docTypeError && (
                  <div className="warning"> please Select Document Type </div>
                )}
              </div>
              <div>
                <div>Documents list</div>
                <Checkbox.Group
                  style={{ width: "100%" }}
                  onChange={this.onChange}
                >
                  <Row>
                    <Col span={8}>
                      <Checkbox value="A">A</Checkbox>
                    </Col>
                    <Col span={8}>
                      <Checkbox value="B">B</Checkbox>
                    </Col>
                    <Col span={8}>
                      <Checkbox value="C">C</Checkbox>
                    </Col>
                    <Col span={8}>
                      <Checkbox value="D">D</Checkbox>
                    </Col>
                    <Col span={8}>
                      <Checkbox value="E">E</Checkbox>
                    </Col>
                  </Row>
                </Checkbox.Group>
                {this.props.docListError && (
                  <div className="warning"> please Select atleast one doc </div>
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
                onClick={() => this.onFinished()}
                // disabled={true}
              >
                Finish
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    ...state.redux_form
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        pushValueInStore,
        validateOnNext,
        initialLoading,
        validateOnFinish
      },
      dispatch
    )
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App2);
