import useCounter from "../hooks/useCounter"


export default function Counter() {
    const{count,handleClickPlus,handleClickless}= useCounter();
  return (
    <>
    <h3 className="text-2xl"> Counter <small className="fond-bold">{count}</small></h3>
    <div>
        <button onClick= {()=>handleClickPlus()} className="p-2 bg-blue-500 round-xl mx-2 text-white hover:bg-red-400">+1</button>
        <button onClick= {()=>handleClickless()} className="p-2 bg-blue-500 round-xl mx-2 text-white hover:bg-red-400">-1</button>
    </div>
    
 // metodo que se haga las suma y al resta
    </>
  )
}
