import { useEffect, useState } from "react";
import api from "../libs/api";
import message from "../libs/message";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await api.send("/users/login", "POST", {
        username,
        password,
      });
      localStorage.setItem("token", res.result.token);
      localStorage.setItem("role", res.result.role);
      if (res.result.role !== "admin") {
        message.error("Sorry, only admins are allowed access.");
        localStorage.removeItem("token");
        localStorage.removeItem("role");
      } else {
        message.success("Login " + res.message);
        navigate("/admin/rooms");
      }
    } catch (error) {
      console.log(error.message);
      message.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/admin/rooms");
    }
  }, []);

  return (
    <div className="bg-light" style={{ height: "100vh" }}>
      <div className="bg-light d-flex justify-content-center align-items-center vh-100">
        <div className="card shadow p-4 " style={{ width: "24rem" }}>
          <div className="text-center">
            <h1 className="h4 text-gray-900 mb-4">Welcome !</h1>
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="form-group mb-4">
                <label className="form-label">Username</label>
                <input
                  type="text"
                  name="name"
                  value={username}
                  onChange={(e) => {
                    e.preventDefault();
                    setUsername(e.target.value);
                  }}
                  className="form-control"
                  placeholder="Enter your username..."
                />
              </div>
              <div className="form-group mb-4">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => {
                    e.preventDefault();
                    setPassword(e.target.value);
                  }}
                  className="form-control"
                  placeholder="Enter your password..."
                />
              </div>

              <div className="form-group">
                <button type="submit" className="form-control btn btn-primary">
                  {loading ? "Loading..." : "Login"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
