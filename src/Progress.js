import React, { Component } from "react";
import "./App.css";
import { Select, Input, Button } from "antd";
import "antd/dist/antd.css";
import { connect } from "react-redux";
import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";
import "./progress.css";
const Option = Select.Option;

class ProgressStatus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      definition: "pending",
      mapping: "",
      welcome: ""
    };
  }
  static getDerivedStateFromProps(props, state) {
    if (props.renderApp1) {
      return {
        definition: "pending",
        mapping: "",
        welcome: ""
      };
    }
    if (props.renderApp2) {
      return {
        definition: "active",
        mapping: "pending",
        welcome: ""
      };
    }
    if (!props.renderApp2 && !props.renderApp2) {
      return {
        definition: "active",
        mapping: "active",
        welcome: "active"
      };
    }
  }
  render() {
    console.log("printing props", this.props);
    return (
      <div>
        <div class="container">
          <ul class="progressbar">
            <li class={this.state.definition}>scenario definition</li>
            <li className={this.state.mapping}>meta_data mapping</li>
            <li className={this.state.welcome}>Welcome page</li>
          </ul>
        </div>
      </div>
    );
  }
}
// export default App1;

function mapStateToProps(state) {
  return {
    ...state.redux_form
  };
}

export default connect(mapStateToProps)(ProgressStatus);
