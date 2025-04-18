import UserCard from "./components/UserCard.jsx"
import lovepic from "./assets/lovepic.png";
import "./App.css";

function App() {
  return (
    <div className="container">
      <UserCard name="Love Rana" desc="desc1" image={lovepic} style={{"border-radius":"10px"}}/>
      <UserCard name="Maharana Pratap" desc="desc2" image={lovepic}/>
      <UserCard name="Prithviraj Chauhan" desc="desc3" image={lovepic}/>
    </div>
  )
}

export default App
