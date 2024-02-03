import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { CiSearch } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";


const Navbar = () => {
    return (
        <div className='navigationBar'>
            <div className='leftView'>Exclusive</div>
            <div className='rightView'>
                <Link to="/Home" className='list' >Home </Link>
                <Link to="/Contact"className='list'>Contact</Link>
                <Link to="/About"className='list'>About</Link>
                <Link to="/Sign Up"className='list'>Sign Up</Link>
            </div>
            <div className='searchbox'> 
      
                <input className="bg"type='text'name="search"placeholder='What are looking for?'/>
            <button  ><CiSearch className='Searchicon' /></button>
              <h2><FaRegHeart /></h2>
              <h2><BsCart3 /></h2>
             
              
            </div>
        </div>
    )
}

export default Navbar
        









        
           
                

                
        
     
        