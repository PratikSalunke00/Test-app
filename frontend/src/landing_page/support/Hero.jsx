import React from "react";

function Hero() {
  return (
    <section className="bg-light py-5">
      <div className="container">

        {/* Top Header */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2>Support Portal</h2>
          <button className="btn btn-primary">My tickets</button>
        </div>

        {/* Search Bar */}
        <input
          type="text"
          className="form-control p-3"
          placeholder="Eg: How do I open my account, How do I activate F&O..."
        />

      </div>
    </section>
  );
}

export default Hero;