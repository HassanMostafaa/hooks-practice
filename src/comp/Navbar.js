import React from "react";

const Navbar = ({ setResourceType }) => {
  return (
    <div className="navbar">
      <div className="logo">
        <h1>React Hooks Practice</h1>
      </div>
      <div className="btns">
        <button onClick={() => setResourceType("Posts")}>
          Posts <i className="fas fa-newspaper"></i>
        </button>

        <button onClick={() => setResourceType("Users")}>
          Users <i className="fas fa-users"></i>
        </button>

        <button onClick={() => setResourceType("Comments")}>
          Comments <i className="fas fa-comments"></i>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
