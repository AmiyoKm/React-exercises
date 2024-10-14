import { useReducer, useState } from "react";
import { initialState, reducer } from "./counterReducer";


export default function Counter(){
    const [state , dispatch ]=useReducer(reducer,initialState)
    const [inputValue , setInputValue] = useState(0)
    
    const handleIncrementSubmit = () =>{
        dispatch({type:'inputIncrement' , payload : Number(inputValue)})
        setInputValue(0)
    }

    const handleDecrementSubmit = () =>{
        dispatch({type:'inputDecrement' , payload : Number(inputValue)})
        setInputValue(0)
    }


    return (
        <div>
            <h1>Counter:{state.count}</h1>
            <button onClick={()=>dispatch({type: 'increment'})}>Increment</button>
            <button onClick={()=>dispatch({type: 'decrement'})}>Decrement</button>
            <button onClick={()=>dispatch({type: 'reset'})}>Reset</button>

            <div>
                <input type="text" placeholder="add to the counter" value={inputValue} onChange={(e)=> setInputValue(e.target.value)} />
                <button onClick={handleIncrementSubmit}>Add</button>
                <button onClick={handleDecrementSubmit}>Sub</button>
            
             </div>
        </div>
    )
 
}