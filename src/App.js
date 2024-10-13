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
        <Outlet />
      </Container>
    </div>
  );
}

export default App;
