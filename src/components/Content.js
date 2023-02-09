import { useContext } from 'react'
import { AppContext } from '../App'
import { BiChevronsRight } from "react-icons/bi";

const Content = () => {
  const {title,company,dates,duties} = useContext(AppContext)
  return (
    <div className='content'>
        <h2 className='title'>{title}</h2>
        <h4 className='company'>{company}</h4>
        <p className='date'>{dates}</p>
        {duties.map((dutie,index)=>{
          return(
            <div  key={index} className='duties'>
            <BiChevronsRight className='icon'/>
            <p className='dutie'>{dutie}</p>
            </div>
          )
        })}
    </div>
  )
}


export default Content