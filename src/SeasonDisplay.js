import React from 'react';
import './SeasonDisplay.css'
const seasonConfig ={
  summer:{
    text:"Let's hit the beach",
    icon:"snowflake"
  },
  winter:{
    text:"Burr! Its Chilly",
    icon:"sun"
  }
}
const getSeason=(lat,month)=>{
if(month>2 && month<9){
 return lat>0?'summer':'winter'
}else{
  return lat>0?'winter':'summer';
}
}
function SeasonDisplay(props) {
 const season = getSeason(props.latitude,new Date().getMonth());
 const {text,icon} = seasonConfig[season]
     return (
    <div className={ `season-display ${season}`}>
      <i className={`icon-left ${icon} icon massive`}></i>
     <h1>
       {text}
       </h1> 
       <i className={` icon-right ${icon} icon massive`}></i>
      </div>
  )
}

export default SeasonDisplay;