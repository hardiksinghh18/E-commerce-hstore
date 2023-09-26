// import React,{ useContext } from 'react'
// import { AppContext } from './context/productcontext';

// export default function About() {
//   const myName = useContext(AppContext)
//   console.log(myName)
//   return (
//     <>
//        <h1>about</h1>
//       <h1>my name is : {myName}</h1>
//     </>
//   )
// }


import React from "react";
// import { useProductContext } from "./context/productcontext";
import Services from "./components/Services";
import AboutTop from "./components/AboutTop";

const About = () => {
  // const  {myName}  = useProductContext();
  
  return (
    <>
       <div class=" flexColumn">
        
      
            <h2>About Us</h2>

            <AboutTop/>
            <Services/>
       
    </div>
    </>
  );
};

export default About;


