import React from 'react';
import { Component } from 'react';
import PropTypes from 'prop-types';
import {GridList,GridTitle} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import ZoomIn from 'material-ui/svg-icon/action/zoom-in';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

class ImageResult extends Component{
    render(){
        return(
<div></div>
        )
    }
}

ImageResult.propTypes={
    images:PropTypes.array.isRequired
}

export default ImageResult;