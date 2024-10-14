

import React, { useRef } from 'react'

const FocusInput = () => {
    const ref = useRef(null)
  return (
    <div>
      <input type="text" ref={ref} />
      <button  onClick={()=> ref.current.focus()}>do Stuff</button>

    </div>
  )
}

export default FocusInput