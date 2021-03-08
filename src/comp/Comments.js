import React from "react";

const Comments = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div className="comment" key={item.id}>
          <p>
            <span>{item.id} .</span>
            Commented by :{" "}
            <span style={{ fontWeight: "600" }}>{item.name}</span>
          </p>

          <p>{item.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Comments;
