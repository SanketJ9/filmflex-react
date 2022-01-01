import React, {useState,useEffect} from 'react'
import { useNavigate } from "react-router-dom";
import "./Nav.css"


function Nav() {
    const [show, handleShow] = useState(false);
    const navigate = useNavigate();

    const navbartransition = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        }else{
            handleShow(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll" , navbartransition);
        return () => {
            window.removeEventListener("scroll", navbartransition);
        }
    }, [])

    return (
        <div className={`nav ${show && "nav-dark"}`}>
            <h1 onClick={() => navigate("/")} className='nav-logo'>filmflex</h1>
            <img onClick={() => navigate("/profile")} className='user-avatar' src={require('./Components/media/avatar.png')} alt="" />
        </div>
    )
}

export default Nav
