import { useEffect, useState } from "react";
import "./App.css";
import Comments from "./comp/Comments";
import Navbar from "./comp/Navbar";
import Posts from "./comp/Posts";
import Users from "./comp/Users";

function App() {
  const [resourceType, setResourceType] = useState("Users");
  const [items, setItems] = useState([]);
  const [err, setErr] = useState(false);
  const [errMsg, setErrMsg] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => setItems(json))
      .catch((error) => {
        setErr(true);
        setErrMsg("" + error);
      });
  }, [resourceType]);

  return (
    <div className="App">
      <header className="App-header">
        <Navbar setResourceType={setResourceType} />
        <h1>{resourceType}</h1>
        {resourceType === "Posts" && <Posts items={items} />}
        {resourceType === "Users" && <Users items={items} />}
        {resourceType === "Comments" && <Comments items={items} />}
        {err && (
          <div>
            {errMsg} data for {resourceType}
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
