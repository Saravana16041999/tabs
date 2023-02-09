import { useEffect } from 'react';
import { createContext} from 'react';
import { useState } from 'react';
import './App.css';
import Companey from './components/Companey';
import Content from './components/Content';


export const AppContext = createContext()

const Link = `https://course-api.com/react-tabs-project/`
function App() {
  const [IsLoading, setIsLoading] = useState(true)
  const [users, setusers] = useState([])
  const [value,setvalue] = useState(0)
  
  const fatchuser = async()=>{
     const responce = await fetch(Link);
     const data = await responce.json()
     setusers(data)
     setIsLoading(false)
  }

  useEffect(()=>{
        fatchuser()   
  },[])
  if(IsLoading){
    return(
      <h1>Loading...</h1>
    )
  }
  const {company,dates,duties,title,order} = users[value]
  console.log(users[0])

  return (
    <section className='content_1'>
    <header className='head'>
      <h1 className='experince'>Experince</h1>
    </header>
    <main className='main'>
    <AppContext.Provider value={{users,company,dates,duties,title,order,setvalue}}>
      <Companey/>
      <Content/>
    </AppContext.Provider>
    </main>
    </section>
  );
}




export default App;
