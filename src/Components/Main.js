import React, { Component } from "react";
import styled from "styled-components";
import styles from "../App.css";

const Container = styled.div`
  margin: 0 auto;
  max-width: 1920px;
  width: 100%;
  height: 100vh;
  border: solid;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(
    to right bottom,
    #7a7171,
    #5a5454,
    #3d3939,
    #211f20,
    #000000
  );
`;

const Calculator = styled.div`
  width: 25%;
  height: 80%;
  background-color: #000;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Result = styled.div`
  color: #fff;
  width: 75%;
  height: 20%;
  font-size: 25px;

  h1 {
    text-align: right;
    widht: 100%;
    height: 100%;
  }
`;

const Columns = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Buttonslightgray = styled.button`
  width: 60px;
  padding: 1.1rem;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  font-size: 1.3rem;
  margin: 7px;
  text-align: center;
`;

const Buttonsgray = styled.button`
  width: 60px;
  padding: 1.1rem;
  border-radius: 50%;
  border: none;
  margin: 7px;
  cursor: pointer;
  background-color: #505050;
  color: #fff;
  font-size: 1.3rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Buttondel = styled.button`
  width: 60px;
  padding: 1.1rem;
  border-radius: 50%;
  border: none;
  margin: 7px;
  cursor: pointer;
  background-color: #505050;
  color: #fff;
  font-size: 1.3rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(
    to right bottom,
    #ffd200,
    #dc882b,
    #9e4f34,
    #512728,
    #000000
  );
`;

const Buttonsgold = styled.button`
  width: 60px;
  padding: 1.1rem;
  border-radius: 50%;
  border: none;
  margin: 7px;
  cursor: pointer;
  background-color: #ff9500;
  color: #fff;
  font-size: 1.3rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default class Main extends Component {
  state = {
    num: "0",
    oldnum: "",
    operator: "",
  };

  // -- Arrow function for buttons --
  // Function to capture an value
  setNum = (e) => {
    if (this.state.num.length < 8) {
      // "e" represent an event to capture a value
      if (this.state.num === "0") {
        this.setState({
          // Changing an state to set a new value
          num: e.target.value,
        });
      } else {
        this.setState({
          num: this.state.num + e.target.value, // Taking my state and adding the value to show on screean
        });
      }
    }
  };
  // End Function to capture an value

  setClear = () => {
    this.setState({
      num: "0",
    });
  };

  changeSign = () => {
    if (this.state.num === this.state.num) {
      this.setState({
        num: -this.state.num,
      });
    } else {
      this.setState({
        num: Number(this.state.num),
      });
    }
  };

  percentUse = () => {
    this.setState({
      num: Number(this.state.num) / Number(100),
    });
  };

  dotUse = () => {
    if (this.state.num.includes(".")) {
      this.setState({
        num: this.state.num,
      });
    } else if (this.state.num === this.state.num) {
      this.setState({
        num: this.state.num + ".",
      });
    }
  };

  handleOperator = (e) => {
    let setoperator = e.target.value;
    this.setState({
      operator: setoperator,
      oldnum: this.state.num,
      num: "0",
    });
  };

  resultEquals = () => {
    if (this.state.operator === "÷") {
      this.setState({
        num: Number(this.state.oldnum) / Number(this.state.num),
      });
    }
    if (this.state.operator === "X") {
      this.setState({
        num: Number(this.state.oldnum) * Number(this.state.num),
      });
    }
    if (this.state.operator === "-") {
      this.setState({
        num: Number(this.state.oldnum) - Number(this.state.num),
      });
    }
    if (this.state.operator === "+") {
      this.setState({
        num: Number(this.state.oldnum) + Number(this.state.num),
      });
    }
    if (this.state.operator === "") {
      this.setState({
        num: "0",
      });
    }
  };

  delNumber = () => {
    if (this.state.num === "") {
      this.setState({
        num: "0",
      });
    } else {
      this.setState({
        num: this.state.num.slice(0, -1),
      });
    }
  };

  render() {
    return (
      <Container>
        <Calculator>
          <Result>
            <h1>{this.state.num}</h1>
          </Result>
          <Columns>
            <Buttonslightgray onClick={this.setClear}>AC</Buttonslightgray>
            <Buttonslightgray onClick={this.changeSign}>+/-</Buttonslightgray>
            <Buttonslightgray onClick={this.percentUse}>%</Buttonslightgray>
            <Buttonsgold onClick={this.handleOperator} value={"÷"}>
              ÷
            </Buttonsgold>
          </Columns>
          <Columns>
            <Buttonsgray onClick={this.setNum} value={7}>
              7
            </Buttonsgray>
            <Buttonsgray onClick={this.setNum} value={8}>
              8
            </Buttonsgray>
            <Buttonsgray onClick={this.setNum} value={9}>
              9
            </Buttonsgray>

            <Buttonsgold onClick={this.handleOperator} value={"X"}>
              x
            </Buttonsgold>
          </Columns>
          <Columns>
            <Buttonsgray onClick={this.setNum} value={4}>
              4
            </Buttonsgray>
            <Buttonsgray onClick={this.setNum} value={5}>
              5
            </Buttonsgray>
            <Buttonsgray onClick={this.setNum} value={6}>
              6
            </Buttonsgray>

            <Buttonsgold onClick={this.handleOperator} value={"-"}>
              -
            </Buttonsgold>
          </Columns>
          <Columns>
            <Buttonsgray onClick={this.setNum} value={1}>
              1
            </Buttonsgray>
            <Buttonsgray onClick={this.setNum} value={2}>
              2
            </Buttonsgray>
            <Buttonsgray onClick={this.setNum} value={3}>
              3
            </Buttonsgray>

            <Buttonsgold onClick={this.handleOperator} value={"+"}>
              +
            </Buttonsgold>
          </Columns>
          <Columns>
            <Buttonsgray onClick={this.setNum} value={0}>
              0
            </Buttonsgray>
            <Buttonsgray onClick={this.dotUse} value={"."}>
              .
            </Buttonsgray>
            <Buttondel onClick={this.delNumber}>DEL</Buttondel>

            <Buttonsgold onClick={this.resultEquals} value={"="}>
              =
            </Buttonsgold>
          </Columns>
        </Calculator>
      </Container>
    );
  }
}
