import React from "react";

function ParentClassroomPage() {
  return (
    <div style={{
      maxWidth: "900px",
      margin: "0 auto",
      padding: "24px",
      background: "#fff",
      borderRadius: "12px",
      boxShadow: "0 2px 16px rgba(0,0,0,0.08)",
      fontSize: "1.1rem"
    }}>
      {/* Gallery Section */}
      <section style={{ marginBottom: "32px" }}>
        <h2 style={{color: "#4b79a1"}}>Classroom Gallery</h2>
        <div style={{
          display: "flex",
          gap: "12px"
        }}>
          {/* Sample images — replace with your own! */}
          <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=300&q=80" alt="Classroom" style={{ width: "140px", borderRadius: "8px" }} />
          <img src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=300&q=80" alt="Projects" style={{ width: "140px", borderRadius: "8px" }} />
        </div>
      </section>

      {/* Announcements Section */}
      <section style={{ marginBottom: "32px" }}>
        <h2 style={{color: "#4b79a1"}}>Announcements</h2>
        <ul>
          <li>Back-to-School Night: September 10th at 6pm!</li>
          <li>Field trip permission slips due September 15th.</li>
        </ul>
      </section>

      {/* Learning Section */}
      <section style={{ marginBottom: "32px" }}>
        <h2 style={{color: "#4b79a1"}}>What We're Learning</h2>
        <p>We're exploring the solar system in science and reading "Charlotte's Web" together in literacy!</p>
      </section>

      {/* Contact Section */}
      <section>
        <h2 style={{color: "#4b79a1"}}>Contact Mrs. Lincoln</h2>
        <p>Email: mrs.lincoln@school.edu</p>
      </section>
    </div>
  );
}

export default ParentClassroomPage;