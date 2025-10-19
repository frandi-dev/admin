import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import {
  AiOutlineMessage,
  AiOutlinePlus,
  AiOutlinePoweroff,
  AiOutlineUser,
} from "react-icons/ai";
import * as bootstrap from "bootstrap";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import message from "../libs/message";

const Layout = () => {
  const navigate = useNavigate();
  const [triger, setTriger] = useState(false);

  useEffect(() => {
    // Aktifkan semua tooltip setelah render
    const tooltipTriggerList = document.querySelectorAll(
      '[data-bs-toggle="tooltip"]'
    );
    tooltipTriggerList.forEach((el) => {
      new bootstrap.Tooltip(el);
    });

    const modalTriggerList = document.querySelectorAll(
      '[data-bs-toggle="modal"]'
    );
    modalTriggerList.forEach((el) => {
      new bootstrap.Modal(el);
    });
  }, [triger]);

  useEffect(() => {
    if (localStorage.getItem("role") !== "admin") {
      message.error("Sorry, only admins are allowed access.");
      localStorage.removeItem("token");
      localStorage.removeItem("role");
    }

    if (!localStorage.getItem("token")) {
      navigate("/");
    }
  }, []);
  return (
    <div className="d-flex vh-100">
      <Sidebar />
      {/* Main Content */}
      <div className="flex-grow-1 bg-light">
        <nav className="navbar bg-body-tertiary border-bottom">
          <div className="container-fluid">
            <ul className="nav">
              <li className="nav-item" style={{ paddingRight: "4px" }}>
                <button
                  className="btn btn btn-outline-primary text-center"
                  data-bs-toggle="modal"
                  data-bs-target="#add-room"
                >
                  <AiOutlinePlus style={{ marginBottom: "2px" }} />
                </button>
              </li>
              <li className="nav-item" style={{ paddingRight: "4px" }}>
                <button
                  className="btn btn btn-outline-primary text-center"
                  data-bs-toggle="tooltip"
                  data-bs-placement="bottom"
                  data-bs-title="Message"
                >
                  <AiOutlineMessage style={{ marginBottom: "2px" }} />
                </button>
              </li>

              <li className="nav-item" style={{ paddingRight: "2px" }}>
                <button
                  className="btn btn btn-outline-primary text-center"
                  data-bs-toggle="tooltip"
                  data-bs-placement="bottom"
                  data-bs-title="Profile"
                >
                  <AiOutlineUser style={{ marginBottom: "2px" }} />
                </button>
              </li>
            </ul>
            <div className="d-flex">
              <button
                className="btn btn-danger text-center"
                data-bs-toggle="tooltip"
                data-bs-placement="left"
                data-bs-title="Close"
                onClick={(e) => {
                  e.preventDefault();
                  localStorage.removeItem("token");
                  navigate("/");
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
