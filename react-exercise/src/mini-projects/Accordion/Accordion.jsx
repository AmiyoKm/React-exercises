import React, { useState } from 'react'
import { accordionData } from './content'
import SingleAccordion from './singleAccordion'

const Accordion = () => {
   
  return (
    <div className='flex flex-col bg-white gap-5 justify-center m-10'>
        {
            accordionData ?
            accordionData.map((tile, index) => (
                <SingleAccordion key={index} title={tile.title} content={tile.content} /> )):null
        }

    </div>
  )
}

export default Accordion