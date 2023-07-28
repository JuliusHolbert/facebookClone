import "./logout.scss";
import { makeRequest } from "../../axios";

const Logout = ({setShowLogout}) => {


  const handleLogout = async () =>{
    // makeRequest.post("/auth/logout");
    localStorage.removeItem("user");
    window.location.reload();
  }

  return (
    <div className="logout">
      <div className="wrapper">
        <span>Are you sure you want to log out?</span>
        <div className="options">
          <button onClick={handleLogout}>Yes</button>
          <button onClick={() => setShowLogout(false)}>Not Yet</button>
        </div>
        <button className="close" onClick={() => setShowLogout(false)}>
          close
        </button>
      </div>
    </div>
  );
};

export default Logout;
