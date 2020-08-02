import React from "react";
import { Component } from "react";
import TextField from "material-ui/TextField";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";

import ImageResults from "../ImageResult/ImageResult";

class Search extends Component {
  state = {
    searchText: "",
    amount: 15,
    apiUrl: "https://pixabay.com/api",
    apiKey: "17733946-da09621ea7c5db4c99e7c04dd",
    images: [],
  };

  onTextChange = (e) => {
    const val=e.target.value;
    this.setState({ [e.target.name]: val}, async () => {
      if(val===""){
this.setState({images:[]})
      }
      else{
        const response = await fetch( `${this.state.apiUrl}/?key=${this.state.apiKey}&q=${
          this.state.searchText
        }&image_type=photo&per_page=${this.state.amount}&safesearch=true`);
      const data = await response.json();
      this.setState({ images: data.hits });
      }
    });
  };


  onAmountChange = (e, index, value) => this.setState({ amount: value });

  render() {

    return (
      <div style={{padding:"30px"}} >
        <h2 style={{textAlign:"center"}}>Meraki provides you with the latest collection of the highest quality pictures in no time!</h2>
        <h3 style={{textAlign:"center"}}>This app is developed by <a style={{textDecoration:"none"}} href="https://kevinjacob2001.github.io/">Kevin Jacob</a> using React.js with love!💓</h3>
        <TextField
          name="searchText"
          floatingLabelStyle={{color: "white",fontSize:"25px" }}
          value={this.state.searchText}
          onChange={this.onTextChange}
          floatingLabelText="Search for the images!"
          fullWidth={true}
        />
        <br />
        <SelectField
          name="amount"
          floatingLabelStyle={{color: "white",fontSize:"20px" }}
          floatingLabelText="No of images per page:"
          
          value={this.state.amount}
          onChange={this.onAmountChange}
        >
       
          <MenuItem value={5} primaryText="5" />
          <MenuItem value={10} primaryText="10" />
          <MenuItem value={15} primaryText="15" />
          <MenuItem value={30} primaryText="30" />
          <MenuItem value={50} primaryText="50" />
          <MenuItem value={100} primaryText="100" />
          <MenuItem value={150} primaryText="150" />
          <MenuItem value={200} primaryText="200" />

        </SelectField>
        <br />
        {this.state.images.length > 0 ? (
          <ImageResults images={this.state.images} />
        ) : null}
      </div>
    );
  }
}

export default Search;