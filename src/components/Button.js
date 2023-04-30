
import React from "react";


const Button = ({surpriseHandler}) => {

    const clickHandler = () =>{
        surpriseHandler();
    }

    return (
        <div>
             <button onClick={clickHandler} className="bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg">Surprise Me</button>
        </div>
    );
}

export default Button;
