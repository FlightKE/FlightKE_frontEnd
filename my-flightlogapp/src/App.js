import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar/navbar"
import Footer from "./components/Footer/footer"
import Home from "./components/Home/home"
import UserProfile from "./components/Profile/userProfile"
import Signin from "./components/Signup/signin"
import Register from "./components/Signup/register"
import AddFlight from "./components/Profile/add-flight"


function App() {
  return (
    <Router>
      <div className = "container">
        <Navbar/>
      <br/>
       <Routes>
      <Route path = "/" element={<Home/>}/>
      <Route path = "/user/:id" element= {<UserProfile/>}/> 
      <Route path = "/register" element= {<Register/>}/> 
      <Route path = "/addflight" element = {<AddFlight/>}/>
      <Route path = "/signin" element= {<Signin/>}/> 
      <Route path = "/footer" element= {<Footer/>}/> 
      </Routes>
   </div> 
   </Router>
  );
}

export default App;
