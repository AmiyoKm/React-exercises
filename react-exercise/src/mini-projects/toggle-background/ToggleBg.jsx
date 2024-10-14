import React, { useState } from 'react';
import './index.css'




const ToggleBg = () => {
    const [textColor , setTextColor] = useState('white')
const [backgroundColor , setBackgroundColor] = useState('#1b1b1b')
const [buttonStyle , setButtonStyle] = useState('white')

const handleClick = () =>{
    setBackgroundColor( backgroundColor === '#1b1b1b'? "black" : '#1b1b1b' )
    setTextColor(textColor === 'white' ? '#ffa31a' : "white" )
    setButtonStyle( buttonStyle === 'white' ? 'black' : 'white')
}

  return (
    <section style={{ backgroundColor, color: textColor }}>
      <button
        onClick={handleClick}
        style={{
          buttonStyle,
          color: textColor,
          border: `2px solid ${textColor}`,
        }}
      >
        {backgroundColor == "#1b1b1b" ? "Black Theme" : "White Theme"}
      </button>
      <section className="content">
        <h1>
          Welcome To A <br /> Real World..
        </h1>
      </section>
    </section>
  );
}

export default ToggleBg