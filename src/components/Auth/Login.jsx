import { useState, useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import instance from "../../config/axiosConfig.jsx";

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
      console.log(response.data.data.user);
      setToken(response.data.data.authorization.token);
      setUser(JSON.stringify(response.data.data.user));
      setErrors({});
      navigate("/");
    } catch (error) {
      setErrors(error.response.data.errors || { message: "Login failed" });
      console.error("Login failed:", error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        {errors.message && <p style={{ color: "red" }}>{errors.message}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
