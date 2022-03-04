import React from 'react';
import {Route, Switch} from 'react-router-dom';
import About from './About';
function Anjali(props) {
    console.log(props);
    return (
 <>
     

 
 <div className='cards'>
 <div className='card'>
<img src={props.imgsrc} alt='myPic'  className='card__img' />
<div className='card__info'>
<span className='card__category'>{props.title}</span>
<h3 className='card__title'>{props.sname}</h3>
<a href= {props.link} target ='_blank'>   
<button>wathch now</button>
</a>
</div>
</div>   
</div>
</>
    )
}



 


export default Anjali;
