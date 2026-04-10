import { useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import measureImg from "../assets/ShirtPant.jpeg";

function Measurement() {
  const [data, setData] = useState({});

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data); // later send to backend
  };

  return (
    <>
      <Header />

      <main className="measurement-entry-section">
        <div className="measurement-container">

          <h2>Custom Measurement</h2>
          <img
  src={measureImg}
  alt="Measurement Guide"
  style={{ width: "200px", marginBottom: "20px" }}
/>
          <form onSubmit={handleSubmit}>

            {/* Basic Info */}
            <fieldset>
              <legend>Basic Info</legend>

              <input
                type="text"
                name="measurementName"
                placeholder="Measurement Name"
                onChange={handleChange}
                required
              />

              <select name="unit" onChange={handleChange}>
                <option value="cm">cm</option>
                <option value="inch">inch</option>
              </select>
            </fieldset>

            {/* Shirt */}
            <fieldset>
              <legend>Shirt Measurements</legend>

              <input type="number" name="chest" placeholder="Chest" onChange={handleChange} required />
              <input type="number" name="shoulder" placeholder="Shoulder" onChange={handleChange} required />
              <input type="number" name="sleeveLength" placeholder="Sleeve Length" onChange={handleChange} required />
              <input type="number" name="shirtLength" placeholder="Shirt Length" onChange={handleChange} required />
              <input type="number" name="neck" placeholder="Neck" onChange={handleChange} required />
            </fieldset>

            {/* Pant */}
            <fieldset>
              <legend>Pant Measurements</legend>

              <input type="number" name="waist" placeholder="Waist" onChange={handleChange} required />
              <input type="number" name="hip" placeholder="Hip" onChange={handleChange} required />
              <input type="number" name="inseam" placeholder="Inseam" onChange={handleChange} required />
              <input type="number" name="outseam" placeholder="Outseam" onChange={handleChange} required />
              <input type="number" name="thigh" placeholder="Thigh" onChange={handleChange} required />
            </fieldset>

            <button type="submit" className="btn-submit">
              Save Measurement
            </button>

          </form>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Measurement;