import { useState } from 'react'
export default function useCounter() {


    const [count, setcount] = useState(0)
    
    const handleClickPlus = ()=>{
        setcount(currentValue =>currentValue +1)
        
    }


    const handleClickless = ()=>{
        setcount(currentValue =>currentValue -1)
    }
  return {count,handleClickPlus,handleClickless}
  
    
    
 
}
