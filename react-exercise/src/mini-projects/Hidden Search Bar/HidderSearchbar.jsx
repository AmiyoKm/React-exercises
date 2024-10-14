import React, { useState } from 'react'
import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { icon } from '@fortawesome/fontawesome-svg-core';


const HiddenSearchBar = () => {
    const [showInput , setShowInput] = useState(false);
    const [bgColor , setBgColor] = useState('#1a1a1a')
    const handleClick = (e) =>{
        setBgColor('#1a1a1a')
        if (e.target.className === "container") {
            setShowInput(false);
            setBgColor("1a1a1a");
          }
    }
  return (
    <section className='container' style={{background:bgColor}}onClick={handleClick} >
        {
            showInput ? <input type="text" className='text-white' /> : <FontAwesomeIcon icon={faMagnifyingGlass}  bounce 
        size="2x" color='white' onClick={()=>setShowInput(!showInput)} />
        }
    </section>
  )
}

export default HiddenSearchBar