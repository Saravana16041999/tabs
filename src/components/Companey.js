import { useContext } from "react"
import { AppContext } from "../App"


const Companey = () => {
  const {users,setvalue} = useContext(AppContext)
    return (
      <div className="person" >  
    {users.map((person,index)=>{
        return( 
            
        <button className="person_btn" key={person.id} onClick={()=>{setvalue(index)}}>
            {person.company}
        </button>
        
        )
    })}
    </div>
    )
}

export default Companey