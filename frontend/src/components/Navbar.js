import { useNavigate } from "react-router-dom";

import "../styles/navbar.css";


function Navbar() {

  const navigate = useNavigate();

  const role = localStorage.getItem("role");


  const handleLogout = () => {

    localStorage.clear();

    navigate("/");
  };


  return (

    <div className="navbar">

      <h2>Issue Tracker</h2>

      <div>

        {role === "admin" ? (

          <button onClick={() => navigate("/admin")}>
            Admin
          </button>

        ) : (

          <button onClick={() => navigate("/employee")}>
            Employee
          </button>

        )}

        <button onClick={handleLogout}>
          Logout
        </button>

      </div>

    </div>
  );
}

export default Navbar;