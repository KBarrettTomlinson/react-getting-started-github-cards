import React from "react";
import "./Header.css";

// const Header = ({ title }) => {
//   return <div className="header">{title}</div>;
// };

class Header extends React.Component {
  render() {
    return <div className="header">{this.props.title}</div>;
  }
}

export default Header;
