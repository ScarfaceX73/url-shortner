import { Outlet, useNavigate } from "react-router-dom";
import useUser from "./hooks/use-user";
import { logout } from "./components/services/auth";

function App() {
  const { userStatus } = useUser()
  const navigate = useNavigate()
  const handleLogout = async () => {
    await logout();
    navigate('/login')
  };
  return (
    <div className="container-fluid p-12">
      <div className="flex justify-between">
        <div>
          My Url Shortner
        </div>
        <div className="flex items-center">
          <div className="mx-3">
            {userStatus?.email}
          </div>
          {
            userStatus?.email ? (

              <button
                type="submit"
                className="btn btn-primary bg-blue-500"
                onClick={handleLogout}
              >
                Logout
              </button>

            ) : <></>
          }
        </div>
      </div>
      <div className="flex items-center justify-center">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
