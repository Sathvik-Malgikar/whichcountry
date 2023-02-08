import './App.css';
import axios from "axios"
import {useEffect, useState} from "react"

import CardsGrid from './CardsGrid.js';
import NewEntry from './newEntry';


function App() {

const [data , setData] = useState([{
  "country" : "India" ,  "capital" : "New Delhi"
}])

useEffect(()=>{
axios.get("http://cap-it-all.onrender.com/static/data/").then((resp)=>{
if(resp.status == 200){
  setData(resp.data)
}
})
},[])


const [quiz,setQuiz] = useState(true)


  return (
    <div className="App">
   
   { quiz? <CardsGrid data={data} ></CardsGrid> : <NewEntry></NewEntry> }
   <img className='backgroundimg' src='https://www.thoughtco.com/thmb/fwC8tEiUK168DsQmMQzFOoKAWUw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/455628981-58b9dee05f9b58af5cbb3686.jpg' ></img>
    <button onClick={()=>{setQuiz(!quiz)}}  >switch mode</button>
    </div>
  );
}

export default App;
