import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import CardList from "./Components/CardList/CardList";
import Form from "./Components/Form/Form";

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     profiles: testData,
  //   };
  // }

  state = {
    profiles: [],
  };

  addNewProfile = (profileData) => {
    this.setState((prevState) => ({
      profiles: [...prevState.profiles, profileData],
    }));
  };

  render() {
    return (
      <div className="App">
        <Header title="The GitHub Cards App" />
        <Form onSubmit={this.addNewProfile} />
        <CardList profiles={this.state.profiles} />
      </div>
    );
  }
}

export default App;
