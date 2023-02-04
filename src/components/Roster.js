import react, {useState} from "react"
import "./roster.css"
const url = "https://c9-firebase-express-depoly.web.app/getall"

export default function Roster(){
    
    const [person, setPerson] =useState([])

    return(
        <>
        <div>
               <p> HELLO </p>
               <div>{person.map(persons =>{
                                       return(
                                             <>
                                            <p>NAME</p>
                                           <p>{persons.first_name}</p>
                
                                            </>
                                        )
                                        })}</div>

        <button onClick={()=>{

            fetch(url)
            .then( response => response.json())
            .then(setPerson)
            .catch(console.error)

        }}> CLICK ME</button>
                            
        </div>
        </>
    )


}