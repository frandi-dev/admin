import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { AiOutlinePlus, AiOutlinePoweroff } from "react-icons/ai";
import * as bootstrap from "bootstrap";
import { useEffect } from "react";

const Layout = () => {
  useEffect(() => {
    // Aktifkan semua tooltip setelah render
    const tooltipTriggerList = document.querySelectorAll(
      '[data-bs-toggle="tooltip"]'
    );
    tooltipTriggerList.forEach((el) => {
      new bootstrap.Tooltip(el);
    });
  });
  return (
    <div className="d-flex vh-100">
      <Sidebar />
      {/* Main Content */}
      <div className="flex-grow-1 bg-light">
        <nav className="navbar bg-body-tertiary border-bottom">
          <div className="container-fluid">
            <ul className="nav">
              <li class="nav-item">
                <button
                  className="btn btn-primary"
                  data-bs-toggle="tooltip"
                  data-bs-placement="bottom"
                  data-bs-title="add new room"
                >
                  <AiOutlinePlus style={{ marginBottom: "2px" }} />
                </button>
              </li>
            </ul>
            <div className="d-flex">
              <button
                className="btn btn-danger text-center"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                data-bs-title="close"
                onClick={(e) => {
                  e.preventDefault();
                  window.electronAPI.closeWindow();
                }}
              >
                <AiOutlinePoweroff style={{ marginBottom: "2px" }} />
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
