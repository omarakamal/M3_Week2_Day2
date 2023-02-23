import { useState } from "react"
import axios from 'axios'

function Forms(){

    const [name,setName] = useState('')
    const [occupation,setOccupation] = useState('')
    const [weapon,setWeapon] = useState('')


    function handleSubmit(e){
        e.preventDefault() //prevents the form from refreshing when I click the button
        axios.post('https://ih-crud-api.herokuapp.com/characters',{
            name:name,
            occupation:occupation,
            weapon:weapon
        })
        setName('')
        setWeapon('')
        setOccupation('')
        }
    return(
        <div>
            <form onSubmit={handleSubmit}>
            <label htmlFor="">
                    Name
                 <input type="text" placeholder="name" value={name} onChange={(e)=>setName(e.target.value)}/>

                </label> <label htmlFor="">
                    Weapon
                 <input type="text" placeholder="name" value={weapon} onChange={(e)=>setWeapon(e.target.value)}/>

                </label> <label htmlFor="">
                    Occupation
                 <input type="text" placeholder="name" value={occupation} onChange={(e)=>setOccupation(e.target.value)}/>

                </label>
                <button>submit</button>
            </form>
        </div>
    )
}
export default Forms