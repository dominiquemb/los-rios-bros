import "./App.css";
import { Container } from "@mui/material";
import BandImage2 from "./assets/bg2.JPEG";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Container maxWidth="lg" style={{ marginTop: "50px" }}>
        <div
          style={{
            position: "fixed",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            top: 0,
            left: 0,
            filter: "blur(8px)",
          }}
        >
          <img
            src={BandImage2}
            style={{ display: "inline-block", width: "100%" }}
            alt="bg"
          />
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "black",
              opacity: 0.8,
            }}
          ></div>
        </div>
        <h1
          style={{
            fontFamily: "inherit",
            position: "absolute",
            top: 0,
            zIndex: 2,
            fontWeight: 100,
            height: "100px",
            color: "white",
          }}
        >
          Los Rios Bros
        </h1>
        <div style={{ marginTop: "100px", position: "absolute", zIndex: 2 }}>
          <Outlet />
        </div>
      </Container>
    </div>
  );
}

export default App;
