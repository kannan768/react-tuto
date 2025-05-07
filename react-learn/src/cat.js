
import React from "react";


class Cat extends React.Component {
  constructor() {
    super();
    this.state = { count: 0 };
    this.state = { name: "kannan" };
  }
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  changeName = () => {
    this.setState({ name: "black" });
  };
  render() {
    const { ownerinfo } = this.props;
    const { ownername, ownerage } = ownerinfo;
    return (
      <>
        <h1>
          hello owner {ownername},{ownerage}
        </h1>
        <h1>{this.state.count}</h1>
        <h1>{this.state.name}</h1>
        <button onClick={this.increment}>click me class based count</button>
        <button onClick={this.increment}>click me class based count</button>
        <button onClick={this.changeName}>Change Name</button>
      </>
    );
  }
}

export default Cat