import { useState, useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import instance from "../../config/axiosConfig.jsx";
import "./styles.css";
import LF from "../../assets/LH.png";
import Tube from "../../assets/tube.png";


const Login = () => {
  const { setToken, setUser } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await instance.post("/login", formData);
      const { token } = response.data.data.authorization;
      const { user } = response.data.data;
      setToken(token);
      setUser(JSON.stringify(user));

      localStorage.setItem('token', token);
      localStorage.setItem('user', user);

      setErrors({});

      navigate("/");
    } catch (error) {
      setErrors(error.response.data.errors || { message: "Login failed" });
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="body">
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"
      />
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.2.0/css/fontawesome.css"
      />

      <div className="container">
        <div className="screen">
          <div className="screen__content">
          <img src={LF} alt="Login" className="login-image" />

            <form className="login" onSubmit={handleSubmit}>
              <div className="login__field">
                <i className="login__icon fas fa-user"></i>
                <input
                  className="login__input"
                  placeholder="User name / Email"
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="login__field">
                <i className="login__icon fas fa-lock"></i>
                <input
                  type="password"
                  className="login__input"
                  placeholder="Password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="button login__submit">
                <span className="button__text">Log In</span>
                <i className="button__icon fas fa-chevron-right"></i>
                {errors.message && <p style={{ color: "red" }}>{errors.message}</p>}
              </button>
            </form>

            <div className="social-login">
              <div className="social-icons">
              <img src={Tube} alt="Login" className="tube-image" />

              </div>
            </div>
          </div>
          <div className="screen__background">
            <span className="screen__background__shape screen__background__shape3"></span>
            <span className="screen__background__shape screen__background__shape2"></span>
            <span className="screen__background__shape screen__background__shape1"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
