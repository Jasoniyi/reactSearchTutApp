import React, { Component } from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends Component {
  state = {
    images: []
  };

  // callbck sent as prop to child
  onSearchSubmit = async text => {
    const responce = await unsplash.get("/search/photos", {
      params: { query: text }
    });
    // console.log(this);
    // console.log(responce.data.results);
    this.setState({ images: responce.data.results });
  };

  render() {
    return (
      <div
        className="ui container"
        style={{ marginTop: "30px", textAlign: "center" }}
      >
        {/* runs the func when seearchBar is submitted,
        - onSearchSubmit is passed as prop to SEARCBAR comp
        */}
        <SearchBar onUserSubmit={this.onSearchSubmit} />
        Found: {this.state.images.length} images
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
