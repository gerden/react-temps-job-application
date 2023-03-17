import { NavLink, useSearchParams } from "react-router-dom";

function Detail({ props }) {
  console.log("detail test 1");
  console.log(props.name);
  console.log("detail test 2");
  return (
    <div>
      <h2>Detail's page</h2>

      <div>{/* <h1> hello {name1}</h1> */}</div>

      <div>
        <text>name</text>
        <text>name</text>
      </div>

      <div>
        <text>password</text>
        <text>name</text>
      </div>
    </div>
  );
}

export default Detail;
