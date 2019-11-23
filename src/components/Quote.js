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
        TEXT: {this.props.quoteText} <br />
        AUTHOR:by: {this.props.quoteAuthor}
      </div>
    );
  }
}

export default Quote;
