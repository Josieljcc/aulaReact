import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchColor } from "../redux/actions/actions";
import "./Header.css";

class Header extends Component {
  changeColor = () => {
    const { dispatch } = this.props;
    dispatch(fetchColor());
  };
  render() {
    const { color } = this.props;
    return (
      <div className="header" style={{ background: color }}>
        <button onClick={this.changeColor}>Mudar Cor</button>
      </div>
    );
  }
}

const mapStateToProps = ({ color }) => ({
  color,
});

export default connect(mapStateToProps)(Header);
