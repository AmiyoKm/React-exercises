

import React, { useState,useRef, useEffect } from 'react'

const Timer = () => {
    const [count, setCount] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const timerRef = useRef(0);

    useEffect(() => {
      timerRef.current = setInterval(()=>{
        setCount(c=>c+1);
      },1000)
    
      return () => {
       clearInterval(timerRef.current)
      }
    }, [])

    const handleTimer = () => {
      
      clearInterval(timerRef.current);
        if(isRunning){
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
        <button onClick={handleTimer}>Stop</button>

    </div>
  )
}

export default Timer