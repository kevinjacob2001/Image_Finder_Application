import React from "react";
import { Component } from "react";
import TextField from "material-ui/TextField";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";

class Search extends Component {
  state = {
    searchText: "",
    amount: 15,
    apiUrl: "https://pixabay.com/api",
    apiKey: "17733946-da09621ea7c5db4c99e7c04dd",
    images: []
  };

  onTextChange = (e) => {
    this.setState({ [e.target.name]: e.target.value},async()=>{
        const response=await fetch(`${this.state.apiUrl}/?key=${this.state.apiKey}&q=${this.state.searchText}&image_type=photo&
        per_page=${this.state.amount}&safesearch=true`)
    const data=await response.json();
    this.setState({images:data.hits})
    });
  };

  render() {
      console.log(this.state.images)
    return (
      <div>
        <TextField
          name="searchText"
          value={this.state.searchText}
          onChange={this.onTextChange}
          floatingLabelText="Search for the images"
          fullWidth={true}
        />
        <br />

        <SelectField
          name="amount"
          floatingLabelText="Amount"
          value={this.state.amount}
          onChange={this.onAmountChange}
        >
          <MenuItem value={5} primaryText="5" />
          <MenuItem value={10} primaryText="10" />
          <MenuItem value={15} primaryText="15" />
          <MenuItem value={30} primaryText="30" />
          <MenuItem value={50} primaryText="50" />
        </SelectField>
        <br />
      </div>
    );
  }
}

export default Search;
