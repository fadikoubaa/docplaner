import React from 'react'

export default function stats(props) {
    return (
        <div className="stats">

            <div className="desc"> 
                <h2>The world's
biggest healthcare platform</h2>
                <p>We work from 6 offices all over the world, bringing Docplanner Group to life in almost 20 countries.</p>
            </div>
            
            <div className="bands-boxes">
            { props.y.map(el=> 
            <div className='box' >
                <img  src={el.svg }/>
                <h1> {el.title} </h1>
                <p> {el.des} </p>
             
            </div>
              )}
              </div>
        </div>
    )
}