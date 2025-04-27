import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

    const navigate = useNavigate();

    function handleClick(){
        navigate('/about');
    }

    return (
        <div>
        Home Page
        {/* When you click on this button, the useNavigate hook hits you to the path mentioned to render about page */}
        <button onClick={handleClick}>Move to about page</button>
        </div>
    )
}

export default Home
