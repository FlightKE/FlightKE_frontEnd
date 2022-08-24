import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import Navbar from "./components/navbar"
import Userlist from "./components/user-list"
import Edituser from "./components/edit-user"
import Createuser from "./components/create-user"

function App() {
  return (
    <Router>
      <div className = "container">
      {/* <Navbar/> */}
      <br/>
      <Routes>
      <Route path = "/" element={<Userlist/>}/>
      <Route path = "/user" element= {<Edituser/>}/> 
      <Route path = "/login" element= {<Createuser/>}/> 
       </Routes>
       </div>
    </Router>
    
  );
}

export default App;
