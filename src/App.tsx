import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginView } from "./Views/Login/LoginView";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginView />} />
        <Route path="/login" element={<LoginView />} />
        <Route
        //placeholder -  a esta ruta a parte va a contar con otro parametro
        /*path="/movie-detail/:id"
          element={<MovieDetailView />}*/
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
