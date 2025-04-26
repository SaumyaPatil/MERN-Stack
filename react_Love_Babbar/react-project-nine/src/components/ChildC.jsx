import React, { useContext } from 'react'
import { ThemeContext, UserContext } from '../App'

const ChildC = () => {
    //We have fetched the object that we have passed here!
    const user = useContext(UserContext);

    const {theme, setTheme} = useContext(ThemeContext);
    function toggleTheme(){
      if(theme === 'light')
        setTheme('dark')
      else
        setTheme('light')
    }

  return (
    <div>
      data: {user.name}

      <button onClick={toggleTheme}>Change Theme</button>
    </div>
  )
}

export default ChildC

