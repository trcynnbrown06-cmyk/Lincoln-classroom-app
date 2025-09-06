import React from "react";
import ParentClassroomPage from "./components/ParentClassroomPage";

function App() {
  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #ece9e6 0%, #ffffff 100%)",
      fontFamily: "Segoe UI, Arial, sans-serif"
    }}>
      <header style={{
        background: "#4b79a1",
        color: "#fff",
        padding: "32px 0",
        textAlign: "center",
        marginBottom: "30px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.06)"
      }}>
        <h1 style={{ margin: 0, fontSize: "2.5rem" }}>Mrs. Lincoln's Classroom</h1>
        <p style={{ fontSize: "1.2rem", marginTop: "8px" }}>Welcome Parents!</p>
      </header>
      <ParentClassroomPage />
    </div>
  );
}

export default App;