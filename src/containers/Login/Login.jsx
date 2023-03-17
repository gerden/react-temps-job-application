import React, { useEffect, useState } from "react";
// import logo from "./logo.svg";
import classes from "./Login.module.scss";
import Detail from "../Detail";
import { useRef } from "react";
import { Link } from "react-router-dom";

const App = () => {
  const [groups, setGroups] = useState([]);
  const [loading, setLoading] = useState(false);
  const [name, setName] = "t";

  const nameInputRef = useRef();

  useEffect(() => {
    setLoading(true);
    // http://jsonplaceholder.typicode.com/users
    // http://localhost:8080/jobs
    fetch("http://localhost:8080/temps")
      .then((response) => response.json())
      .then((data) => {
        setGroups(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }

  function login() {
    console.log("test2");
    console.log(nameInputRef.current.value);
    if (groups.find((group) => group.firstName == nameInputRef.current.value)) {
      console.log("hit");
      <Detail name="Sara" />;
      // Detail(test);
      // window.location.href = "/Detail";
      console.log("hit");
    }
  }
  return (
    <div className={classes.Login}>
      <header>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <div className={classes.Login_text}>
          <h2>Login</h2>
          <h2>{groups.name}</h2>
          <input
            className={classes.Name_box}
            type="text"
            ref={nameInputRef}
          ></input>

          <button onClick={login}>Login</button>
          <button onClick={login}>Login2</button>
          <Link to={"/Detail"}>Login3</Link>

          {groups.map((group) => (
            <div key={group.id}>{group.firstName}</div>
          ))}
        </div>
      </header>
    </div>
  );
};

export default App;
