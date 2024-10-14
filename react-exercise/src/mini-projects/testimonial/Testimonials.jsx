import React, { useState } from "react";


function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [
    {
      quote: "This is the best product I've ever used!",
      author: "Jane Doe",
    },
    {
      quote: "I highly recommend this product to everyone!",
      author: "John Smith",
    },
    {
      quote: "This product has completely changed my life!",
      author: "Bob Johnson",
    },
  ];

  const handlePrevClick = () => {
    setCurrentIndex(
      (currentIndex + testimonials.length - 1) % testimonials.length
    );
  };

  const handleNextClick = () => {
    setCurrentIndex(currentIndex === testimonials.length-1 ? 0 : currentIndex +1 
    );
  };

  return (
    <div className="flex flex-col bg-blue-100 ">
      <div className="flex flex-col ">
        <p>{testimonials[currentIndex].quote}</p>
        <p>{testimonials[currentIndex].author}</p>
      </div>
      <div className=" flex justify-between items-center h-14">
        <a  type="button" className="border-lg"onClick={handlePrevClick}>back</a>
        <a type="button" onClick={handleNextClick}>next</a>

      </div>
    </div>
  );
}

export default Testimonials