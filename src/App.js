import "./App.css";
import Login from "./components/login/login";
import UrlShortner from "./components/url-short/url-short";

function App() {
  return (
    <div className="container-fluid">
      <Login />
      <UrlShortner />
    </div>
  );
}

export default App;
