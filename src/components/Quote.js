import React, { Component } from "react";
// import spinner from "../spinner.jpg";

class Quote extends Component {
  // state = {
  //   post: null,
  //   quoteText: " ",
  //   quoteAuthor: 'by " "'
  // };

  //   componentDidMount() {
  //     fetch("")
  //       .then(response => response.json())
  //       .then(json => {
  //         this.setState({ post: json });
  //       });
  //     console.log(this.post);
  //   }

  render() {
    // if (this.props.quote === null) {
    //   return <img src={spinner} alt={"spinner"} />;
    // }
    return (
      <div>
        <blockquote>TEXT: {this.props.quoteText} </blockquote>
        <p>AUTHOR: by: {this.props.quoteAuthor}</p>
      </div>
    );
  }
}

export default Quote;
