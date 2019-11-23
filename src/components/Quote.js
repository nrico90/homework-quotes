import React, { Component } from "react";
import PropTypes from "prop-types";
import "./button.css";
// import spinner from "../spinner.jpg";

class Quote extends Component {
  // static propTypes = {
  //   quoteText: PropTypes.string.isRequired,
  //   quoteAuthor: PropTypes.string.isRequired,
  //   id: PropTypes.string.isRequired,
  //   iLike: PropTypes.string.isRequired
  // };

  state = {
    iLike: 0,
    iNoLike: 0,
    class: null
  };

  iLike = () => {
    this.setState({
      class: "liked",
      iLike: this.state.iLike + 1
      // iLike: true
    });
  };

  notLike = () => {
    this.setState({
      class: "not-liked",
      iNoLike: this.state.iNoLike + 1
      // iLike: false
    });
  };

  render() {
    return (
      <div>
        <blockquote className={this.state.class}>
          {this.props.quoteText}
        </blockquote>
        <p> By: {this.props.quoteAuthor}</p>

        <button onClick={this.iLike}> 👍 {this.state.iLike} :) </button>
        <button onClick={this.notLike}> 👎 {this.state.iNoLike} :( </button>
      </div>
    );
  }
}

export default Quote;
