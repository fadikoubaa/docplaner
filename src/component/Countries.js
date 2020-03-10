import React from 'react'
import '../App.css'
export default function Countries(props) {
    return (
        <div className="cnt">
       {props.c.map((el,i)=>(
           <div >
<img src={el.image}></img>
        <div className='contain'>
       <p >{el.pays}</p>
       <button className="button"><a className="deco" href ='https://www.docplanner.com/career?&loc=italy#jobs-offers'> See openings </a> </button>
           </div>
           </div>

       ))}
    
            
        </div>
    )
}
