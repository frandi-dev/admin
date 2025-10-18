import { Link } from "react-router-dom";
import { AiOutlineHome, AiOutlineSetting } from "react-icons/ai";
const Sidebar = () => {
  return (
    <div
      className="bg-primary text-dark d-flex flex-column p-3"
      style={{ width: "250px" }}
    >
      <h4 className=" text-white mb-4">Admin</h4>
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <Link
            to="/"
            className={`nav-link text-white ${
              location.pathname === "/" ? "active bg-dark" : ""
            }`}
          >
            <AiOutlineHome className="" /> Home
          </Link>
        </li>

        <li>
          <Link
            to="/settings"
            className={`nav-link text-white ${
              location.pathname === "/settings" ? "active bg-primary" : ""
            }`}
          >
            <AiOutlineSetting /> Settings
          </Link>
        </li>
      </ul>
      <hr />
      <div className="text-center small">v1.0.0</div>
    </div>
  );
};

export default Sidebar;
