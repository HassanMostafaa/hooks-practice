import React from "react";

const Posts = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div className="post" key={item.id}>
          <h4>
            <span style={{ fontSize: "16px", fontWeight: "400" }}>
              {item.id} .
            </span>
            {item.title}
          </h4>
          <p>{item.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Posts;
