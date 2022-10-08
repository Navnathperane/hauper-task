import React from "react";
import { Route,Link} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AddPost from "./components/AddContact";
import EditContact from "./components/EditContact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Deleteuser from "./components/Deleteuser";
import "./styles.css";

const App = () => {
  return (
    <div className="App">
      
      <ToastContainer /> 
      <Navbar />
      
      <Link to="/Home"><button className="btn1 btnside btn">Users</button></Link>
      <Link to="/Deleteuser"><button className="btn1 btn">Delete</button></Link>
      
      <Route path="/Home" component={Home}></Route>
      <Route path="/Deleteuser" component={Deleteuser}></Route>
      
      
      
      <Route exact path="/add" component={() => <AddPost />} />
      <Route exact path="/edit/:id" component={() => <EditContact />} />

      
    </div>
  );
};
export default App;
