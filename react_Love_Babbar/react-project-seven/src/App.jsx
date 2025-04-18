import './App.css'

function App() {

  // function handleClick(){
  //   alert("I am clicked!");
  // }

  // function handleMouseOver(){
  //   alert("Para ke upr mouse lekr aiye ho!");
  // }

  // function handleInputChange(e){
  //   console.log("Value till now: ", e.target.value);
  // }

  // function handleSubmit(e){
  //   //The default behaviour of form when submitted is that it refreshes the page, handles call to server, etc.
  //   e.preventDefault();

  //   //I am writing custom behaviour down
  //   alert("Form submit kardu kya!");
  // }

  return (
    <div>

      <button onClick={alert("Button click hua hai!!")}>Click Me</button>

      {/* <form onSubmit={handleSubmit}> */}
        {/* Jaise hi input me value change hogi, event trigger hoga aur vo event haamne function ko dediya aur function ne event me se value nikalkar print kara diya */}
        {/* <input type="text" onChange={(e)=>handleInputChange(e)}/> */}
        {/* <button type='submit'>Submit</button>  */}
      {/* </form> */}
    </div>

    // <div>
    //   <p onMouseOver={handleMouseOver} style={{border:"1px solid black"}}>I am a para</p>
    //   <button onClick={handleClick}>Click Me</button>
    // </div>
  )
}

export default App
 