import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Meals = () => {

    const [items , setItems] = useState([]);
    
    useEffect(() => {
      axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood').then(res =>
      {
        console.log(res.data.meals);
        setItems(res.data.meals)
      }
      ).catch(err =>{
        console.log(err);
      })
    
      return () => {
     
      }
    }, [])
    

  return (
    <div className='grid grid-cols-3 items-center justify-around gap-5 '>
        {items.map((item, index) => (
          <div key={index} className='m-10 shadow-2xl rounded-xl transition-transform transform hover:scale-110'>
           
            <div className=''><img className='object-cover w-65 h-30' src={item.strMealThumb} alt={item.strMeal} /></div>
            <div className='flex justify-between items-center'><p className='font-sans text-sm'>{item.strMeal} </p> <span className='text-green-600 '>#{item.idMeal}</span> </div>
            
          </div>
        ))}
      </div>
   
  )
}

export default Meals