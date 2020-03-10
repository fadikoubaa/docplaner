import React from 'react'


export default function cards(props) {
    return (
        <div className="cards">
            {props.x.map(el=>
                
                <div className={el.class}>
                    <h5>{el.title}</h5>
                    <h2>{el.description}</h2>
                    <img style={{width:"500px", marginLeft:"130px"}} src={el.image}/>
                    {el.select?<select className='select'>{el.select.map(er=>
                        <option>{er}</option>
                    )}</select>
                    
                :null}
                    </div>
                )}
        </div>
    )
}