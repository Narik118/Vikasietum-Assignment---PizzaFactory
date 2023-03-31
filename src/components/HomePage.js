import React from 'react'
import { useNavigate } from "react-router-dom";
import '../App.css'


const HomePage = () =>{
    const navigate = useNavigate();
    const onClickNagivage=()=>{
        navigate('./Order')
    }
    return(
        <div className='home-main'>
            <h3 className='title'><span className='highlight'>Pizza</span> Factory</h3>
            <div className='pizza-title'>
            <h1>It's not pizza it's experience,<br/> delivered in <span className='highlight'>20 mins.</span></h1>
            <button className='order-btn' onClick={onClickNagivage}>Order Now</button>
            </div>
            
        </div>
    )
}

export default HomePage;