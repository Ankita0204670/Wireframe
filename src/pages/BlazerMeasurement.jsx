import { useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import blazerImg from "../assets/Blazer.jpeg";

function BlazerMeasurement() {
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

      <section className="measurement-entry-section">
        <div className="measurement-container">

          <h2>Blazer Custom Measurement</h2>
          <img
  src={blazerImg}
  alt="Blazer"
  style={{ width: "200px", marginBottom: "20px" }}
/>

          <form onSubmit={handleSubmit}>

            {/* Basic Info */}
            <fieldset>
              <legend>Basic Info</legend>

              <input
                type="text"
                name="blazerMeasurementName"
                placeholder="Measurement Name"
                onChange={handleChange}
                required
              />

              <select name="blazerUnit" onChange={handleChange}>
                <option value="cm">cm</option>
                <option value="inch">inch</option>
              </select>
            </fieldset>

            {/* Body Measurements */}
            <fieldset>
              <legend>Body Measurements</legend>

              <input type="number" name="blazerChest" placeholder="Chest" onChange={handleChange} required />
              <input type="number" name="blazerWaist" placeholder="Waist" onChange={handleChange} required />
              <input type="number" name="blazerShoulder" placeholder="Shoulder Width" onChange={handleChange} required />
            </fieldset>

            {/* Blazer Specs */}
            <fieldset>
              <legend>Blazer Specs</legend>

              <input type="number" name="blazerSleeve" placeholder="Sleeve Length" onChange={handleChange} required />
              <input type="number" name="blazerLength" placeholder="Blazer Length" onChange={handleChange} required />
              <input type="number" name="blazerHip" placeholder="Hip" onChange={handleChange} required />
            </fieldset>

            <div className="form-submit-buttons">
              <button type="submit" className="btn-submit">
                Save Blazer Measurement
              </button>

              <button
                type="button"
                className="btn-submit"
                onClick={() => console.log("Save & Use", data)}
              >
                Save & Use for Order
              </button>
            </div>

          </form>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default BlazerMeasurement;