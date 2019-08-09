import React, { Component } from "react";
import App from "./App";

class SearchBar extends Component {
  state = {
    text: ""
  };

  onFormSubmit = event => {
    event.preventDefault();

    // passes the updated  text back to d App comp
    // -we look @ our props object
    // - we call the func passed to the prop from App
    // - then we invoke with this.state.text

    this.props.onUserSubmit(this.state.text);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.text}
              onChange={event => this.setState({ text: event.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
