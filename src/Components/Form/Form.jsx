import axios from "axios";
import React from "react";

import "./Form.css";

class Form extends React.Component {
  state = { userName: "" };

  handleSubmit = async (event) => {
    event.preventDefault();
    // TODO this doesn't belong here, all axios should be moved to a singular spot.
    await axios
      .get(`https://api.github.com/users/${this.state.userName}`)
      .then((response) => {
        this.props.onSubmit(response.data);
        this.setState({ userName: "" });
      })
      .catch((error) => {
        console.log("Error", error.message);
        this.setState({ userName: "" });
      });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="GitHub username"
          value={this.state.userName}
          onChange={(event) => {
            this.setState({ userName: event.target.value });
          }}
          required
        />
        <button>Add card</button>
      </form>
    );
  }
}

export default Form;
