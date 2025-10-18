import { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Halo ${username}, pesanmu: ${password}`);
  };

  return (
    <div className="bg-light" style={{ height: "100vh" }}>
      <div className="bg-light d-flex justify-content-center align-items-center vh-100">
        <div className="card shadow p-4 " style={{ width: "24rem" }}>
          <div class="text-center">
            <h1 class="h4 text-gray-900 mb-4">Welcome Back!</h1>
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
                  Login
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
