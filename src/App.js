import "./App.css";
import { Container, Grid2 as Grid } from "@mui/material";
import BandImage2 from "./assets/bg2.JPEG";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Container maxWidth="lg" style={{ position: "relative" }}>
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

        <div
          style={{
            position: "absolute",
            zIndex: 2,
            width: "100%",
          }}
        >
          <div style={{ display: "flex", justifyContent: "center" }}>
            <h1
              style={{
                fontFamily: "inherit",
                fontWeight: 100,
                height: "50px",
                color: "white",
              }}
            >
              Arsol Records
            </h1>
          </div>
          <Outlet />
        </div>
      </Container>
    </div>
  );
}

export default App;
