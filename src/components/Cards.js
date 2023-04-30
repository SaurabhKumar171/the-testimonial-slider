import React, { useState } from "react";
import Card from "./Card";
import {FiChevronLeft , FiChevronRight} from 'react-icons/fi'
import Button from "./Button";

const Cards = (props) => {
    let details = props.details;

     const [index , indexHandler] =useState(0);

     const [likedReviews, setlikedReviews] =useState([]);

     function leftShiftHandler(){
        indexHandler((prev) =>((prev-1 < 0) ? (4)  : (prev - 1)));
    }

     function rightShiftHandler(){
        indexHandler( (prev) =>( (prev+1 > 4) ? (0) : (prev + 1)));
     }

     function surpriseHandler (){
        console.log('here');

        let random = Math.floor(Math.random() * details.length);
        console.log(random);
         indexHandler(random);
     }


    return (
        <div className="w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center mt-10 p-10 transition-all duration-700 hover:shadow-xl rounded-md">
             <Card detail={details[index]} likedReviews={likedReviews} setlikedReviews={setlikedReviews}/>

           <div className="flex text-3xl mt-8 gap-3 text-violet-400 font-bold mx-auto">
               <button className="cursor-pointer hover:text-violet-500">
                   <FiChevronLeft onClick={leftShiftHandler}/>
               </button>
    
               <button  className="cursor-pointer hover:text-violet-500 ">
                   <FiChevronRight  onClick={rightShiftHandler}/>
               </button>
            </div>    


            <div className="mt-6">
                 <Button surpriseHandler={surpriseHandler}/> 
            </div>

        </div>
    );
}

export default Cards;