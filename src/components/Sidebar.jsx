import { Link, useLocation } from "react-router-dom";
import { AiOutlineHome, AiOutlineSetting, AiOutlineUser } from "react-icons/ai";
const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="bg-body-tertiary d-flex flex-column p-3 text-center border">
      <h4 className=" text-dark mb-4">Admin</h4>
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item" style={{ marginBottom: "4px" }}>
          <Link
            to="/"
            className={`btn btn-outline-primary ${
              location.pathname === "/rooms" ? "active bg-primary" : ""
            }`}
          >
            <AiOutlineHome />
          </Link>
        </li>

        <li className="nav-item" style={{ marginBottom: "4px" }}>
          <Link
            to="/users"
            className={`btn btn-outline-primary ${
              location.pathname === "/users" ? "active bg-primary" : ""
            }`}
          >
            <AiOutlineUser />
          </Link>
        </li>
      </ul>
      <hr />
      <div className="text-center small">v1.0.0</div>
    </div>
  );
};

export default Sidebar;
