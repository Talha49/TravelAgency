import React from "react";

import Hero from './Components/Hero';
import Coworking from './Components/Coworking';
import Stuff from "./Components/Stuff";
import Destinations from "./Components/Destinations";
import Tours from './Components/Tours';
import Blog from './Components/Blog';
import NewsLetter  from './Components/NewsLetter';


export default function Home() {
  return (
   <div>
    <main>

    <Hero />
    <Stuff />
    <Coworking />
    <Tours/>
    <Blog />
    <NewsLetter />
    <Destinations />
    
    
    </main>
  
   </div>
    

  )
}
