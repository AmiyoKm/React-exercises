
import { useReducer } from "react";

const initialState = {count:0}

function reducer (state , action ){
    switch (action.type) {
        case 'increment' : return {...state , count: state.count + 1} 
                  
        case 'decrement' : return {...state , count: state.count -1}
       
        case 'reset' : return {...state , count : 0}
    
        default:

           return state ; 
    }
}

 export default function UseReducer(){
    const [state , dispatch] = useReducer(reducer , initialState);


    return <div>
        <button className="bg-green-400 p-10 rounded-xl m-10" onClick={()=> dispatch({type:'increment'})}>⬆️</button>
        <button className="bg-red-400 p-10 rounded-xl m-10" onClick={()=> dispatch({type:'decrement'})}>⬇️</button>
        <button className="bg-blue-400 p-10 rounded-xl m-10" onClick={()=> dispatch({type:'reset'})}>0️⃣</button>
        <p className="font-bold text-amber-700 lg:text-7xl">Count:{state.count}</p>
    </div>
 } 