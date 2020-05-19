import React, { Component } from 'react';
import Left from './Left.js'
import './css/Picupload.css';
function Picupload (props){
return (
<div className="gallery">
   <label className="gallery-label">תמונות</label>
   <br></br>
   <div className="pic-1">
      <input onChange={props.handleChange} id="file-upload" type="file"/>
      <button onClick={props.deleteChange} className="delete-button">
      Delete the last image     </button>
   </div>
</div>
)
}
export default Picupload;