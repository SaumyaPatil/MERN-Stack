import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {

    const navigate = useNavigate();

    function handleClick(){
        navigate('/dashboard');
    }
    
    return (
        <div>
        About Page
        {/* How can you move between two pages explicitly using useNavigate hook */}
        <button onClick={handleClick}>Move to dashboard</button>
        </div>
    )
}

export default About
