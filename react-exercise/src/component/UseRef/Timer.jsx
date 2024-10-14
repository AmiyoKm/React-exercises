

import React, { useState,useRef, useEffect } from 'react'

const Timer = () => {
    const [count, setCount] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const timerRef = useRef(0);

    useEffect(() => {
        
      return () => {
       clearInterval(timerRef.current)
      }
    }, [])

    const handleTimer = () => {
      
      
        if(!isRunning){
            timerRef.current = setInterval(()=>{
                setCount(c=>c+1);
              },1000)

             
        }
        else{
            clearInterval(timerRef.current)
           
        }
        setIsRunning(!isRunning)

    }
    

  return (
    <div>
        <h1>Timer: {count}s</h1>
        <button className="border-2 bg-slate-600 text-white"onClick={handleTimer}>{!isRunning? "start" : "stop"}</button>

    </div>
  )
}

export default Timer