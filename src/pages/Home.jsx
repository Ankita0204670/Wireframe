import { Link } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function Home() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h2>Welcome to the Uniform Ordering System</h2>
          <p>
            Order your School and College uniforms easily online with precision
            measurements and quick delivery.
          </p>

          <div className="hero-btns">
            <Link to="/register" className="btn">Register Now</Link>
            <Link to="/login" className="btn">Login</Link>
          </div>
        </div>
      </section>

      <main>

        {/* About Section */}
        <section className="about">
          <div className="container">
            <h3>About Our System</h3>
            <p style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
              We provide a seamless platform for students and parents to order
              high-quality uniforms. Our system ensures the perfect fit through
              manual measurements and intelligent auto-sizing suggestions.
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section className="features">
          <div className="container">
            <h3>Key Features</h3>

            <div className="feature-cards">

              <div className="card">

                <h4>Quality Fabric</h4>
                <p>Premium durable and comfortable materials.</p>
              </div>

              <div className="card">
                <h4>Auto-Sizing</h4>
                <p>Instant size suggestions based on body details.</p>
              </div>

              <div className="card">
                <h4>Quick Delivery</h4>
                <p>Fast doorstep delivery service.</p>
              </div>

            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="how-it-works">
          <div className="container">
            <h3>How It Works</h3>

            <div className="feature-cards">
              <div className="card">
                <h4>1. Register</h4>
                <p>Create your account easily.</p>
              </div>

              <div className="card">
                <h4>2. Measure</h4>
                <p>Enter your measurements.</p>
              </div>

              <div className="card">
                <h4>3. Order</h4>
                <p>Place your order securely.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section className="information">
          <div className="container">
            <h3>Important Information</h3>
            <p>Keep measurements ready before ordering.</p>
            <p>Support available 24/7.</p>
          </div>
        </section>

        {/* CTA */}
        <section className="cta">
          <div className="container">
            <div className="card" style={{ maxWidth: "600px", background: "#333" }}>
              <h4>Ready to get started?</h4>
              <p>Join thousands of students.</p>
              <a href="/register" className="btn">Get Started</a>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}

export default Home;