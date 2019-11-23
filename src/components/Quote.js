import React, { Component } from "react";
import "./button.css";
// import spinner from "../spinner.jpg";

class Quote extends Component {
  state = {
    iLike: 0
  };

  iLike = () => {
    this.setState({
      iLike: "liked"
    });
  };

  notLike = () => {
    this.setState({
      iLike: "not-liked"
    });
  };

  render() {
    return (
      <div>
        <blockquote className={this.state.iLike}>
          TEXT: {this.props.quoteText}{" "}
        </blockquote>
        <p>AUTHOR: by: {this.props.quoteAuthor}</p>
        <button onClick={this.iLike}> :) </button>
        <button onClick={this.notLike}> :( </button>
      </div>
    );
  }
}

export default Quote;
