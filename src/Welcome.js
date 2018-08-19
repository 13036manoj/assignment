import React, { Component } from "react";
import "./App.css";
import { Select, Input, Button } from "antd";
import "antd/dist/antd.css";
import { connect } from "react-redux";
const Option = Select.Option;

class Welcome extends Component {
  static getDerivedStateFromProps(props, state) {
    console.log("this.props.history", props.history);
    if (props.renderApp1) {
      console.log("1st not completed", props.history);
      props.history.push("/");
    }
    if (props.renderApp2) {
      console.log("this.props.history", props.history);
      props.history.push("/last");
    }
  }
  render() {
    console.log("printing props", this.props);
    return (
      <div style={{ marginTop: 123, textAlign: "center", fontSize: "20px" }}>
        Welcome page
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

export default connect(mapStateToProps)(Welcome);
