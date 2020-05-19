import React,{Component} from 'react';
import './css/Right.css';
import Left from './Left.js';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
class Right extends Component{
render(){
const settings = {
fade:true,
speed:500,
slidesToShow:1,
slidesToScroll:1,
className:"slides"
}
return (
<div className="right2">
   <Carousel {...settings}>
      {
      this.props.file.map(function(file,i) {
      return <div className="gallery-right"><img  src={file}></img></div>
      }
      )
      }
   </Carousel>
   <div className="lower">
      <div style={{backgroundColor:this.props.backgroundColor}}  className="category-name-right">
         <h3>{this.props.categoryName}</h3>
      </div>
      <div className="title-right">
         <h1>{this.props.title}</h1>
      </div>
      <div className="sub-title-right">
         <p>{this.props.subTitle}</p>
      </div>
      <div className="author-right">
         <h3>{this.props.author}</h3>
      </div>
   </div>
</div>
);
}
}
export default Right;