import Card from './Card';
import "./App.css"
import axios from "axios"

function CardsGrid({data}) {


    async function check(country,capital){

        let pair = {country,capital}
      

        return await axios.get("http://cap-it-all.onrender.com/check/",{ params :  pair}).then((resp)=>{
          if ( resp.status == 200){
            console.log(resp.data.correct);

         return resp.data.correct
          }
        })
        }

   return(
    <div  className="gridBox"  >
        {data.map(item=>
            <Card country = {item.country} key={item.country}  check = {check}  ></Card>
          
           )}

    </div>
   ) 
}

export default CardsGrid;