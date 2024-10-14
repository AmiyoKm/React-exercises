

export const initialState = {count: 0}

export function reducer(state , action){
    switch (action.type) {
        case 'increment': return {...state , count: state.count+1}

        case 'decrement': return {...state , count: state.count-1}
            
        case 'reset' : return {...state, count: 0}  

        case 'inputIncrement' : return {...state , count:state.count + action.payload} 
        
        case 'inputDecrement' : return {...state , count:state.count - action.payload} 

        default:
           return state;
    }
}
