import React from 'react'
import "./Home.css"
import Capture from "../../assets/Capture.JPG";

const Home = () => {
  return (
    <>
    <div className='leftside'>
    <div className="capture">
  
  <img src={Capture} alt="profile" className="image" height={100}/>
  </div>
      

      <ul className='leftlink'>

        <li>
          Womans's Fashion
        </li>
        <li>
          Men's Fashion
        </li>
        <li>
          Electrionics
        </li>
        <li>
          Home & Lifestyle
        </li>
        <li>
          Medicine
        </li>
        <li>
          Sports & Outdoor
        </li>
        <li>
          Baby's & Toys
        </li>
        <li>
          Groceries & Pets
        </li>
        <li>
          Health & Beauty
        </li>
      </ul>
     
    </div>

</>
     
     






  );
}

export default Home