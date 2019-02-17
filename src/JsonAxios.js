import React from "react";
import { render } from "react-dom";

import axios from "axios";

const url = "https://api.myjson.com/bins/ocftm";

class App extends React.Component {
  constructor() {
    super();
    this.state = { member: [] };
  }

  memberList(list) {
    const memberList = list.map((member, index) => {
      return (
        <li>
          {member.name} {member.age}
        </li>
      );
    });

    return <ul>{memberList}</ul>;
  }

  render() {
    console.log(this.state.member);
    return (
      <div>
        <button onClick={this.getJson}>Get Json</button>
        {this.memberList(this.state.member)}
      </div>
    );
  }

  getJson = () => {
    axios.get(url).then(res => {
      this.setState(res.data);
    });
  };
}

render(<App />, document.getElementById("root"));
