import React from "react";

const Users = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div className="user" key={item.id}>
          <h4>Name : {item.name}</h4>
          <p>Email : {item.email}</p>
          <p>Phone : {item.phone}</p>
          <p>Website : {item.website}</p>
        </div>
      ))}
    </div>
  );
};

export default Users;
