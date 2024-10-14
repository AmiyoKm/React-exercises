


import React, { useRef } from 'react'

const Reffing = () => {
    const ref= useRef(null)

    function handleRef(ref){
        ref.current.focus();
        ref.current.value = 'uiefiuwe'
        ref.current.classList.add('border-green-500')
    }

  return (<>
    <input  className='border-2 border-blue-500' type="text"  ref={ref} />
    <button className=' bg-red-600 text-white p-6 m-6 rounded-lg' onClick={()=>handleRef(ref)}>Adding ref</button>
    </>
  )
}

export default Reffing