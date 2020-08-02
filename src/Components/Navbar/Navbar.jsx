import React from 'react';
import AppBar from 'material-ui/AppBar';
import App from '../../App';

function Navbar(){
    return(
<AppBar style={{background:"#061238",textAlign:"center"}}  title="Meraki!📷🔍">
<a href="https://kevinjacob2001.github.io/" style={{color:"white",textDecoration:"none",marginTop:"20px"}}>
 Meet me!
  </a>
</AppBar>
    )
}

export default Navbar;