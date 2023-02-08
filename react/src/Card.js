
import { useState } from "react"
import "./App.css"

function Card(props) {
 function handler(event){
    if (  event.keyCode != 13 )
    return
    // console.log( await props.check(props.country , event.currentTarget.value));
   props.check(props.country , event.currentTarget.value).then((decision =>{
       if ( decision)
       setDclass("cardClass green")
       else
       setDclass("cardClass red")

   }))
    // console.log( event.currentTarget.value);
}

    const [dclass , setDclass   ]= useState("cardClass white")

    return (<div className={dclass}>
    <h4> {props.country}</h4>

<input placeholder="type and hit enter" onKeyDown={handler}  />
    </div>)
}

export default Card;

