import React from "react";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    

    <div className="container">
      <div className="row d-flex flex-column">
      <div className="col-md-10 mx-auto my-4">
      <Link to={"/"} className=" ml-5">
          <h1 className="heading">React Task</h1>
        </Link>
      
      </div>
    </div>
    </div>
  );
};

export default Navbar;
