import { useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [successMessage, setSuccessMessage] = useState("");
  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(loginData); // later connect to backend
    setSuccessMessage("Login successfully!");
    
    // Redirect to products page after 1.5 seconds
    setTimeout(() => {
      navigate("/product");
    }, 1500);
  };

  return (
    <>
      <Header />

      <main className="login-form-section">
        <div className="login-container">
          <h2>User Login</h2>

          {successMessage && (
            <div style={{ 
              backgroundColor: "#d4edda", 
              color: "#155724", 
              padding: "10px", 
              borderRadius: "5px", 
              marginBottom: "20px",
              textAlign: "center",
              border: "1px solid #c3e6cb"
            }}>
              {successMessage}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="btn-submit">
              Login
            </button>

            <p className="register-link">
              Don't have an account? <Link to="/register">Register</Link>
            </p>
          </form>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Login;