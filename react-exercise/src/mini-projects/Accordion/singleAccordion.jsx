import React ,{useState} from 'react'




const SingleAccordion = ({title,content}) => {

    const [isShown , setIsShown] = useState(false)
    const handleClick = () => {
        setIsShown(!isShown)
    }
  return (
    <div className='bg-red-300 flex flex-col'>
                    <div>
                        <div className='flex justify-between items-center'><p>{title}</p><span onClick={handleClick}>{!isShown? "+": "-"}</span></div>
                        <div> <p>{isShown ? content : null}</p></div>
                       
                        </div>
                         </div> )
  
}

export default SingleAccordion