import UserCard from "./components/UserCard"
import "./App.css";

function App() {
  return (
    <div className="container">
      <UserCard name="Love Rana" desc="desc1"/>
      <UserCard name="Maharana Pratap" desc="desc2"/>
      <UserCard name="Prithviraj Chauhan" desc="desc3"/>
    </div>
  )
}

export default App
