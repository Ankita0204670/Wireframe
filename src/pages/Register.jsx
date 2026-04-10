import { useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [successMessage, setSuccessMessage] = useState("");
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    gender: "",
    dob: "",
    password: "",
    confirm_password: "",
    address_line1: "",
    address_line2: "",
    city: "",
    state: "",
    pincode: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // later connect to backend
    setSuccessMessage("Registered successfully!");

    // Redirect to login page after 2 seconds
    setTimeout(() => {
      navigate("/login");
    }, 2000);
  };

  return (
    <>
      <Header />

      <section className="registration-form-section">
        <div className="form-container">
          <h2>User Registration</h2>

          {successMessage && (
            <div style={{ 
              backgroundColor: "#d4edda", 
              color: "#155724", 
              padding: "15px", 
              borderRadius: "5px", 
              marginBottom: "20px",
              textAlign: "center",
              border: "1px solid #c3e6cb",
              fontSize: "1.1rem"
            }}>
              {successMessage}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            
            {/* Personal Info */}
            <fieldset>
              <legend>Personal Information</legend>

              <div className="form-group">
                <label>Full Name</label>
                <input type="text" name="full_name" placeholder="Full Name" onChange={handleChange} required />
              </div>
              
              <div className="form-group">
                <label>Email</label>
                <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
              </div>

              <div className="form-group">
                <label>Phone</label>
                <input type="tel" name="phone" placeholder="Phone" onChange={handleChange} required />
              </div>

              <div className="form-group">
                <label>Gender</label>
                <select name="gender" onChange={handleChange} required>
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label>Date of Birth</label>
                <input type="date" name="dob" onChange={handleChange} required />
              </div>
            </fieldset>

            {/* Account Info */}
            <fieldset>
              <legend>Account Information</legend>

              <div className="form-group">
                <label>Password</label>
                <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
              </div>

              <div className="form-group">
                <label>Confirm Password</label>
                <input type="password" name="confirm_password" placeholder="Confirm Password" onChange={handleChange} required />
              </div>
            </fieldset>

            {/* Address */}
            <fieldset>
              <legend>Address Information</legend>

              <div className="form-group">
                <label>Address Line 1</label>
                <input type="text" name="address_line1" placeholder="Address Line 1" onChange={handleChange} required />
              </div>

              <div className="form-group">
                <label>Address Line 2</label>
                <input type="text" name="address_line2" placeholder="Address Line 2" onChange={handleChange} />
              </div>

              <div className="form-group">
                <label>City</label>
                <input type="text" name="city" placeholder="City" onChange={handleChange} required />
              </div>

              <div className="form-group">
                <label>State</label>
                <input type="text" name="state" placeholder="State" onChange={handleChange} required />
              </div>

              <div className="form-group">
                <label>Pincode</label>
                <input type="number" name="pincode" placeholder="Pincode" onChange={handleChange} required />
              </div>
            </fieldset>

            <button type="submit" className="btn-submit">Register</button>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Register;