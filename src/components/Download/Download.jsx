import "../../App.css";
import { Container, Button } from "@mui/material";
import Error from "../Error/Error";
import { useParams } from "react-router-dom";

function Download() {
  const { album, song } = useParams();
  return (
    <>
      {album && song ? (
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
          <h3>Download your song here:</h3>
          <br />
          <a
            href={`/assets/songs/${album}/${song}`}
            download={song}
            target="_blank"
          >
            <Button variant="contained" color="primary">
              Download
            </Button>
          </a>
          <br />
          <br />
          <div>
            Questions?
            <br />
            Problems downloading a song?
            <br />
            Email:{" "}
            <a href="mailto:glorias.gr9338@gmail.com">
              glorias.gr9338@gmail.com
            </a>
            <br />
            Phone: <a href="tel:(210) 900-6551">(210) 900-6551</a>
          </div>
        </Container>
      ) : (
        <Error />
      )}
    </>
  );
}

export default Download;
