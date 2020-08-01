import React from "react";
import { Component } from "react";
import TextField from "material-ui/TextField";
import SelectField from "material-ui/SelectField";

class Search extends Component {
  state = {
    searchText: "",
    amount: 15,
    apiUrl: "https://pixapbay.com/api",
    apiKey: "17733946-da09621ea7c5db4c99e7c04dd",
    images: [],
  };

  render() {
    return (
      <div>
        <TextField
          name="searchText"
          value={this.state.searchText}
          onChange={this.handleChange}
          floatingLabelText="Search for the images"
          fullWidth={true}
        />
      </div>
    );
  }
}

export default Search;
