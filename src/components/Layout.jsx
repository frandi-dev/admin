import { Link, Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { AiOutlineMenu, AiOutlinePoweroff } from "react-icons/ai";

const Layout = () => {
  return (
    <div className="d-flex vh-100">
      <Sidebar />

      {/* Main Content */}
      <div className="flex-grow-1 bg-light">
        <nav className="navbar bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand">{/* <AiOutlineMenu /> */}</a>
            <div className="d-flex">
              <button
                className="btn btn-outline-danger text-center"
                onClick={(e) => {
                  e.preventDefault();
                  window.electronAPI.closeWindow();
                }}
              >
                <AiOutlinePoweroff />
              </button>
            </div>
          </div>
        </nav>
        <main className="p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
