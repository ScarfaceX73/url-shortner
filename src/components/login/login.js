import { useEffect, useState } from "react";
import { checkStatus, login, logout } from "../services/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const [loading, setLoading] = useState(true);
  const [userStatus, setUserStatus] = useState(false);

  const handleLogin = async () => {
    await login({ email, password: pass });
    window?.location?.reload();
  };
  const check = async () => {
    const status = await checkStatus();
    if (status) {
      setUserStatus(status);
    }
    setLoading(false);
  };

  const handleLogout = async () => {
    await logout();
    window?.location?.reload();
  };

  useEffect(() => {
    check();
  }, []);

  const renderLoginForm = () => {
    return (
      <div className="w-50">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={email}
            onChange={(e) => {
              setEmail(e?.target?.value);
            }}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            value={pass}
            onChange={(e) => {
              setPass(e?.target?.value);
            }}
          />
        </div>
        <button
          type="submit"
          className={`btn btn-primary`}
          onClick={handleLogin}
          disabled={!!loading}
        >
          Submit
        </button>
      </div>
    );
  };
  if (loading) {
    return <div>Loading.............</div>;
  }

  if (!loading && !userStatus) {
    return <>{renderLoginForm()}</>;
  }

  if (!loading && userStatus)
    return (
      <div className="m-4 d-flex align-items-center justify-content-between">
        <div>{userStatus.email}</div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    );
};

export default Login;
