import React, { useState } from "react";
import {FaQuoteLeft , FaQuoteRight} from 'react-icons/fa'
import {FcLike, FcLikePlaceholder} from 'react-icons/fc'
import { toast } from "react-toastify";






const Card = ({detail,likedReviews,setlikedReviews}) => {
    //  let detail = props.detail;
    //  let key= props.key;


    function likeHandler(id) {
        let updatedReviews;
        if (likedReviews.includes(id)) {
          updatedReviews = likedReviews.filter((liked) => liked.id === id);
          toast.error('Like removed');

          
        } else {
          updatedReviews = [...likedReviews, id];
          toast('Liked');
        }
        console.log(updatedReviews);
        setlikedReviews(updatedReviews);
      }

    return (
        <div className="flex flex-col md:relative">


            <div className="absolute top-[-7rem] z-[10] mx-auto">
                <img className="aspect-square rounded-full w-[140px] h-[140px]" src={detail.image} alt=""/>
                <div className="w-[140px] h-[140px] bg-violet-500 rounded-full absolute top-[-6px] z-[-20] left-[10px]"></div>
            </div>

            <div className="w-[50px] h-[50px] absolute right-2 top-[-4rem] bg-green-200  rounded-full grid place-items-center">
                <button onClick={() => likeHandler(detail.id)}>
                  {
                  (likedReviews.includes(detail.id))?(<FcLike fontSize="1.80rem" />): (<FcLikePlaceholder fontSize="1.74rem" />)
                    }
                </button>
            </div>


            <div className="text-center mt-7">
                <p className="font-bold text-2xl capitalize tracking-wider">{detail.name}</p>
                <p className="text-violet-300 uppercase text-sm">{detail.job}</p>
            </div>


            <div className="text-violet-400 mx-auto mt-5">
                 <FaQuoteLeft />
            </div>

            <div className="text-center mt-4 text-slate-500">
                <p>{detail.text}</p>
            </div>

            <div className="text-violet-400 mx-auto mt-5">
                <FaQuoteRight/>
            </div>

        </div>
    );
}

export default Card;