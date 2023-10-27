import "./login.css";
const Login = () => {
  return (
    <div className="login-container">
      <form className="login-form">
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Username"
        />
      </form>
      <form className="login-form">
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
        />
      </form>
      <button type="submit" className="login-button">
        LOGIN!
      </button>
    </div>
  );
};
export default Login;
