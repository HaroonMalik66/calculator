import React, { Component } from "react";
import "./Calculator.css";

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num1: "",
      num2: "",
      result: "",
      operation: "",
      isActive: 1,
    };
    this.handlechange = this.handlechange.bind(this);
    this.handleDivide = this.handleDivide.bind(this);
    this.handleMultiply = this.handleMultiply.bind(this);
    this.handlePlus = this.handlePlus.bind(this);
    this.handleMinus = this.handleMinus.bind(this);
    this.reset = this.reset.bind(this);
    this.handleNumPressed = this.handleNumPressed.bind(this);
    this.calculate = this.calculate.bind(this);
  }
  reset() {
    this.setState({
      num1: "",
      num2: "",
      result: "",
      operation: "",
      isActive: 1,
    });
  }
  handleNumPressed(evt) {
    this.state.isActive === 1
      ? this.setState({ num1: this.state.num1 + evt.target.id })
      : this.setState({ num2: this.state.num2 + evt.target.id });
  }
  handlechange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }
  handleDivide() {
    // let result = this.state.num1 / this.state.num2;
    this.setState({ operation: "/", isActive: 2 });
  }
  handleMultiply() {
    // let result = this.state.num1 * this.state.num2;
    this.setState({ operation: "*", isActive: 2 });
  }
  handlePlus() {
    // var result = Number(this.state.num1) + Number(this.state.num2);
    this.setState({ operation: "+", isActive: 2 });
  }
  handleMinus() {
    // let result = this.state.num1 - this.state.num2;
    this.setState({ operation: "-", isActive: 2 });
  }
  calculate() {
    let result;
    this.state.operation === "/"
      ? (result = this.state.num1 / this.state.num2)
      : this.state.operation === "*"
      ? (result = this.state.num1 * this.state.num2)
      : this.state.operation === "+"
      ? (result = Number(this.state.num1) + Number(this.state.num2))
      : this.state.operation === "-"
      ? (result = this.state.num1 - this.state.num2)
      : console.log("operator error");
    this.setState({ result: result });
  }
  render() {
    return (
      <div>
        <div className="calcBox">
          <h4>simple calculator</h4>
          <div className="screen">
            <p className="output">
              {this.state.num1} {this.state.operation} {this.state.num2} =
              {this.state.result}
            </p>
            <input
              type="numbers"
              value={this.state.num1}
              onChange={this.handlechange}
              name="num1"
              placeholder="first number"
              className="inputScreen"
              onClick={() => {
                this.setState({ isActive: 1 });
              }}
            ></input>
            <input
              type="numbers"
              value={this.state.num2}
              onChange={this.handlechange}
              name="num2"
              placeholder="second number"
              className="inputScreen"
              onClick={() => {
                this.setState({ isActive: 2 });
              }}
            ></input>
          </div>
          <div className="buttonContainer">
            <div className="numbers">
              <button className="btn" id="1" onClick={this.handleNumPressed}>
                1
              </button>
              <button className="btn" id="2" onClick={this.handleNumPressed}>
                2
              </button>
              <button className="btn" id="3" onClick={this.handleNumPressed}>
                3
              </button>
              {/* <br /> */}
              <button className="btn" id="4" onClick={this.handleNumPressed}>
                4
              </button>
              <button className="btn" id="5" onClick={this.handleNumPressed}>
                5
              </button>
              <button className="btn" id="6" onClick={this.handleNumPressed}>
                6
              </button>
              {/* <br /> */}
              <button className="btn" id="7" onClick={this.handleNumPressed}>
                7
              </button>
              <button className="btn" id="8" onClick={this.handleNumPressed}>
                8
              </button>
              <button className="btn" id="9" onClick={this.handleNumPressed}>
                9
              </button>
              {/* <br /> */}
              <button className="btn" id="." onClick={this.handleNumPressed}>
                .,
              </button>
              <button className="btn" id="0" onClick={this.handleNumPressed}>
                0
              </button>
              <button className="btn" onClick={this.reset}>
                c
              </button>
            </div>
            <div className="operations">
              <button className="btn" onClick={this.handleDivide}>
                /
              </button>
              <button className="btn" onClick={this.handleMultiply}>
                *
              </button>
              <button className="btn" onClick={this.handlePlus}>
                +
              </button>
              <button className="btn" onClick={this.handleMinus}>
                -
              </button>
              <button className="equal btn" onClick={this.calculate}>
                =
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Calculator;
