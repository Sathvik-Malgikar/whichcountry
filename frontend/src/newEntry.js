import axios from "axios";


function NewEntry() {
    
function submit(event){
event.preventDefault()
let country = document.getElementById("country").value
let capital = document.getElementById("capital").value
axios.post("http://cap-it-all.onrender.com/newentry/" , { country , capital } )

}

    return(
        <>
            <h2>
                Make a new entry in json!
            </h2>
            <br/>
            <form method="POST">

            Country : <input id="country" ></input>  Capital : <input id="capital" ></input><span>      </span>
            <button onClick={submit} > add entry</button>
            </form>

        </>

    )
}


export default NewEntry;