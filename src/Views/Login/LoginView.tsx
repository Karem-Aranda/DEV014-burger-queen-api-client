import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { loginUser } from "../../services/ApiService";
import "./LoginStyles.scss";

export function LoginView() {
  const [error, setError] = useState("");
  const navigateTo = useNavigate();

  const onSubmit = async (event: any) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    try {
      const user = await loginUser(email, password);

      if (user) {
        setError("");

        navigateTo("/menu");
      }
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="login">
      <div className="login-container">
        <h1 className="login-title">Iniciar sesión</h1>
        <form className="login-form" onSubmit={onSubmit}>
          <div className="login-form-control">
            <input
              data-testid="email"
              className="login-input"
              type="email"
              name="email"
              placeholder="Ingresa tu email"
            />
          </div>
          <div className="login-form-control">
            <input
              data-testid="password"
              className="login-input"
              type="password"
              name="password"
              placeholder="Ingresa tu contraseña"
            />
          </div>
          {error.length > 0 && (
            <span className="login-message-error">{error}</span>
          )}
          <div className="login-form-control login-form-control--submit">
            <button className="btn-submit" type="submit">
              {" "}
              Ingresar{" "}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
