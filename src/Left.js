import React, { Component } from 'react';
import './css/Left.css';
import Right from './Right.js';
import Picupload from './Picupload.js';
class Left extends Component {
state = {
backgroundColor:'',
categoryName:'',
title:'',
subTitle:'',
author:'' ,
file:[]
};
deleteChange=(event) => {
let demmyArr = this.state.file;
demmyArr.splice(-1,1) ;
this.setState({file: demmyArr}); 
}
handleChange =(event) => {
let demmyArr = this.state.file;
demmyArr.push(  URL.createObjectURL(event.target.files[0]) )
this.setState({file: demmyArr});
}
handletitleChange= (event) => {
this.setState({
title:event.target.value 
})
}
handlesubTitleChange = (event) => {

this.setState({
subTitle:event.target.value
})
}
handlecategoryNameChange= (event) => {
this.setState({
categoryName:event.target.value
})
}
handlebackgroundColorChange = (event) => {
this.setState({
backgroundColor:event.target.value
})
}
handleauthorChange = (event) => {
this.setState({
author:event.target.value
})
}
render() {
return (
<div class="container">
<div className="right">
   <Right file={this.state.file} backgroundColor={this.state.backgroundColor}  pics={this.state.pics} categoryName= {this.state.categoryName} title={this.state.title} subTitle={this.state.subTitle}  author={this.state.author} />
</div>
<div className="left">
   <Picupload deleteChange={this.deleteChange.bind(this)}  handleChange={this.handleChange.bind(this)} />
   <div className="category-name-bc">
      <label className="label-bc" for="category-name-label">צבע רקע - שם קטגוריה</label>
      <br></br>
      <select value={this.state.categoryNameBc} name="category-name-bc" onChange={this.handlebackgroundColorChange} id="category-name-bc-select">
         <option value="white">white</option>
         <option value="red">red</option>
         <option value="blue">blue</option>
         <option value="green">green</option>
         <option value="yellow">yellow</option>
      </select>
      <div/>
         <div className="category-name">
            <label for="category-name">שם קטגוריה</label>
            <br></br>
            <textarea cols="10" rows="1" maxlength="16" value={this.state.categoryName} name="category-name" onChange={this.handlecategoryNameChange} type="text" className="category-name-input"></textarea>
         </div>
         <div className="title">
            <label for="title">שם כותרת</label>
            <br></br>
            <textarea cols="20" rows="2" maxlength="20" value={this.state.title} name="title" type="text" onChange={this.handletitleChange} className="title-input"></textarea> 
         </div>
         <div className="sub-title">
            <label for="title">כותרת משנה</label>  
            <br></br>
            <textarea rows="2" cols="10" maxlength="20"  name="sub-title" value={this.state.subTitle} type="text" onChange={this.handlesubTitleChange} className="sub-title-input"></textarea> 
         </div>
         <div className="author">
            <label for="title">מחבר</label>
            <br></br>
            <textarea cols="20" rows="1" maxlength="20" name="author" value={this.state.author} type="text" onChange={this.handleauthorChange}  className="author-input"></textarea>
         </div>
      </div>
   </div>
</div>
) 
}
}
export default Left ;


