import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
//import { LoginView } from "./views/login/LoginView";
import { MenuView } from "./views/waiter/MenuView";
import { LoginView } from "./views/login/LoginView";
import PrivateRoute from "./components/PrivateRoute";
import { getUserToken } from "./services/UserService";
import "./App.scss";

const ROLES = {
  chef: "chef",
  waiter: "waiter",
  admin: "admin",
};

function App() {
  const renderDefaultPage = () => {
    const usuario = getUserToken();
    const role = "waiter";

    if (!usuario) {
      return <LoginView />;
    } else {
      switch (role) {
        case ROLES.chef:
          return <Navigate to="/orders" />;
          break;
        case ROLES.waiter:
          return <Navigate to="/menu" />;
          break;
        case ROLES.admin:
          return <Navigate to="/admin" />;
          break;
        default:
          return <Navigate to="/login" />;
      }
    }
    // no estas loggeado
    // estas loggeado como chef
    // estas loggeado como mesero
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={renderDefaultPage()} />
        <Route path="/login" element={renderDefaultPage()} />
        <Route
          path="/menu"
          element={<PrivateRoute component={<MenuView />} />}
        />
        <Route path="/*" element={<Navigate to="/not-found" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

//linea 45 -- <Route path="/login" element={<LoginView />} />
//linea 46 -- <Route path="/login" element={renderDefaultPage()} />
