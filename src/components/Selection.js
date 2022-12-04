import React, { useState } from 'react'
import '../styles/Child.css';
import '../styles/App.css';


const Selection=(props)=>{
    let [bgstate,setbgstate]=useState([]);

    return(<div>
       

        <div className='fix-box' id={props.id}  onClick={(e)=>{
            console.log(props.nextBackground)
            document.getElementById(props.id).setAttribute('style',`background: ${props.nextBackground.background}`)
        }}>
            {console.log(props.applyColor)}
            
        </div>


        
        </div>



    );
}

export default Selection;
