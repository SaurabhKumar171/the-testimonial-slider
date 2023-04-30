import React, { useState } from "react";
import reviews from './data'
import Header from "./components/Header";
import Cards from "./components/Cards"

const App = () => {

   const [details ,setDetails] =useState(reviews);

  return <div className="flex flex-col w-[100vw] h-[100vh] justify-center items-center bg-gray-200">
     <div className="text-center">
        <Header />
        <Cards  details={details} setDetails={setDetails}/>
     </div>

  </div>;
};

export default App;
