import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { checkStatus, login, logout } from "../services/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const [loading, setLoading] = useState(true);
  const [userStatus, setUserStatus] = useState(false);
  const navigate = useNavigate()

  const handleLogin = async () => {
    await login({ email, password: pass });
    navigate("/url")
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
      <div className="border p-10 rounded shadow-lg">
        <div className='text-lg font-semibold my-3'>Login</div>
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
          className={`btn btn-primary bg-blue-500`}
          onClick={handleLogin}
          disabled={!!loading}
        >
          Submit
        </button>
        <div className="my-3">
          <span className="text-sm text-gray-600"> Not a member? &nbsp;
            <Link to={'/register'}>
              Click to register
            </Link>
          </span>
        </div>
        <div className="my-3">
          <span className="text-xs text-gray-700 text-blue-900"> Forgor password? &nbsp;
            <Link to={'/forgot-password'}>
              click here to recover your account
            </Link>
          </span>
        </div>
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
