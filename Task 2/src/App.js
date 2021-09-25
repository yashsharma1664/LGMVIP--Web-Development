import { useState } from "react";
import Users from "./Components/Users";
import "./App.css";

function App() {
  const [show, setShow] = useState(false);
  const handleUsersShow = () => {
    setShow(true);
  };
  return (
    <div className="App">
      <nav>
        <h3 className="text-info">Users List</h3>
        <button className="btn btn-info" onClick={handleUsersShow}>
          Get Users
        </button>
      </nav>
      <div className="container">
        <div className="row py-3">
          <div className="col-1 pl-4">
            <h4 className="table-header">ID</h4>
          </div>
          <div className="col-3">
            <h4 className="table-header">AVATAR</h4>
          </div>
          <div className="col-4">
            <h4 className="table-header">NAME</h4>
          </div>
          <div className="col-4">
            <h4 className="table-header">EMAIL</h4>
          </div>
        </div>
        {show ? <Users></Users> : ""}
      </div>
    </div>
  );
}

export default App;
