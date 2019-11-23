import React, { Component } from "react";
import Quote from "./Quote";
import spinner from "../spinner.jpg";

class QuoteSearcher extends Component {
  state = {
    quotes: [
      // {
      //   _id: "5d91b45d9980192a317c8acc",
      //   quoteText:
      //     "Notice that the stiffest tree is most easily cracked, while the bamboo or willow survives by bending with the wind.",
      //   quoteAuthor: "Bruce Lee"
      // },
      // {
      //   _id: "5d91b45d9980192a317c8abe",
      //   quoteText:
      //     "Give me six hours to chop down a tree and I will spend the first four sharpening the axe.",
      //   quoteAuthor: "Abraham Lincoln"
      // },
      // {
      //   _id: "5d91b45d9980192a317c8955",
      //   quoteText:
      //     "Good timber does not grow with ease; the stronger the wind, the stronger the trees.",
      //   quoteAuthor: "J. Willard Marriott"
      // }
    ],
    fetch: false
  };

  componentDidMount() {
    this.setState({ fetch: true });
    fetch("https://quote-garden.herokuapp.com/quotes/search/tree")
      .then(response => response.json())
      .then(data => {
        this.setState({ quotes: data.results, fetch: false });
      })
      .catch(console.error);
  }

  render() {
    if (this.state.fetch === true) {
      return <img src={spinner} alt={"spinner"} />;
    }
    return (
      <div className="quotes">
        <h1>QUOTES</h1>
        {this.state.quotes.map(quote => {
          return (
            <Quote
              // id={quote._id}
              key={quote._id}
              quoteText={quote.quoteText}
              quoteAuthor={quote.quoteAuthor}
            />
          );
        })}
      </div>
    );
  }
}

export default QuoteSearcher;
