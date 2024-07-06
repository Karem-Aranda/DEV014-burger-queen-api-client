import "./LoginStyles.scss";

export function LoginView() {
  return (
    <div className="login">
      <div className="login-container">
        <h1 className="login-title">Iniciar sesion</h1>
        <form>
          <div>
            <input
              data-testid="uname"
              className="login-input"
              type="email"
              name="email"
              placeholder="ingresa tu email"
            />
          </div>
          <div>
            <input
              data-testid="uname"
              className="login-input"
              type="password"
              name="password"
              placeholder="Ingresa tu contraseña"
            />
          </div>
          <div className="btn-input">
            <button type="submit"> Ingresar </button>
          </div>
        </form>
      </div>
    </div>
  );
}
