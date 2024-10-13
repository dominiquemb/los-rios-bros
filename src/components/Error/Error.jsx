import "../../App.css";
import { Container } from "@mui/material";

function Error() {
  return (
    <Container
      maxWidth="lg"
      style={{
        marginTop: "50px",
        display: "flex",
        justifyContent: "center",
        position: "absolute",
        zIndex: 99,
        color: "white",
        flexDirection: "column",
      }}
    >
      <h1>
        Whoops! Page not found. <br />
      </h1>
      <a href="/">Go back to the main page here.</a>
    </Container>
  );
}

export default Error;
