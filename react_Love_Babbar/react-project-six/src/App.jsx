import { useState } from 'react'
import './App.css'
import LogoutBtn from './components/LogoutBtn';
import LoginBtn from './components/LoginBtn';

function App() {

  const[isLoggedin, setLoggedin] = useState(false);

  //On basis of some condition you want to show UI, you have shown it beforehand itself
  //Early return - if this becomes true, then the condition will be executed and LoginBtn code will be returned
  if(!isLoggedin){
    return(
      <LoginBtn/>
    )
  }


  // conditional rendering using if else
  // if(isLoggedin){
  //   return(
  //     <LogoutBtn/>
  //   )
  // }
  // else{
  //   return(
  //     <LoginBtn/>
  //   )
  // }

  //conditional rendering using ternary operator
  // return(
  //   <div>
  //     {isLoggedin ? <LogoutBtn/> : <LoginBtn/>}
  //   </div>
  // )

  //conditional rendering using logical operators
  return(
    <div>
      <h1>Welcome everyone to Codehelp Web dev course</h1>
      <div>
        {isLoggedin && <LogoutBtn/>}
      </div>
      <div>
        {!isLoggedin && <LoginBtn/>}
      </div>
    </div>
  )

}

export default App
