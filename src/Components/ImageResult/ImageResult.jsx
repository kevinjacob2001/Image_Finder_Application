import React from "react";
import { Component } from "react";
import PropTypes from "prop-types";
import { GridList, GridTitle } from "material-ui/GridList";
import IconButton from "material-ui/IconButton";
import ZoomIn from 'material-ui/svg-icons/action/zoom-in'
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import GridTile from "material-ui/GridList/GridTile";

class ImageResult extends Component {
  render() {
    let imageListContent;
    const { images } = this.props;

    if (images) {
      imageListContent = (
        <GridList cols={3}>
          {images.map((img) => (
            <GridTile
              title={img.tags}
              key={img.id}
              subtitle={
                <span>
                  by <strong>{img.user}</strong>
                </span>
              }
              actionIcon={
                <IconButton>
                  <ZoomIn color="white" />
                </IconButton>
              }
            >
              <img src={img.largeImageURL} alt="" />
            </GridTile>
          ))}
        </GridList>
      );
    } else {
      imageListContent = null;
    }

    return(
    <div>{imageListContent}</div>
    )  
}
}

ImageResult.propTypes = {
  images: PropTypes.array.isRequired,
};

export default ImageResult;
