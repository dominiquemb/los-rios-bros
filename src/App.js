import { useState, useRef } from "react";
import "./App.css";
import {
  Container,
  Grid2 as Grid,
  Box,
  Paper,
  Button,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  IconButton,
} from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import BandImage1 from "./assets/bg.JPEG";
import BandImage2 from "./assets/bg2.JPEG";
import BandImage3 from "./assets/bg3.JPEG";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";

function App() {
  const [songsPlaying, setSongsPlaying] = useState([]);
  const albums = [
    {
      albumName: "Vol. I",
      href: "volume-1",
      songs: [
        {
          id: 1,
          title: "Penas",
          fileName: "01 Penas.mp3",
          album: "volume-1",
          link: "https://buy.stripe.com/28o7ukbiZ00N9eo5kH",
          ref: useRef(),
        },
        {
          id: 2,
          title: "Más Alla del Infinito",
          fileName: "02 Más Alla del Infinito.mp3",
          album: "volume-1",
          link: "https://buy.stripe.com/fZe2a0aeV4h34Y84gE",
          ref: useRef(),
        },
        {
          id: 3,
          title: "Al Ritmo de los Rios",
          fileName: "03 Al Ritmo de los Rios.mp3",
          album: "volume-1",
          link: "https://buy.stripe.com/eVa2a0cn35l70HS7sR",
          ref: useRef(),
        },
        {
          id: 4,
          title: "Solo y Muy Triste",
          fileName: "04 Solo y Muy Triste.mp3",
          album: "volume-1",
          link: "https://buy.stripe.com/dR66qgcn3fZL3U46oK",
          ref: useRef(),
        },
        {
          id: 5,
          title: "Chiquilla",
          fileName: "05 Chiquilla.mp3",
          album: "volume-1",
          link: "https://buy.stripe.com/aEU2a0biZfZLcqA28s",
          ref: useRef(),
        },
        {
          id: 6,
          title: "Bajo Las Estrellas",
          fileName: "06 Bajo Las Estrellas.mp3",
          album: "volume-1",
          link: "https://buy.stripe.com/14k01Sdr79BnfCM7sN",
          ref: useRef(),
        },
        {
          id: 7,
          title: "El Verano Ya Llegó",
          fileName: "07 El Verano Ya Llegó.mp3",
          album: "volume-1",
          link: "https://buy.stripe.com/dR65mc72J5l72Q06oG",
          ref: useRef(),
        },
        {
          id: 8,
          title: "Hoy Es Mi Cumpleaños",
          fileName: "08 Hoy Es Mi Cumpleaños.mp3",
          album: "volume-1",
          link: "https://buy.stripe.com/4gw5mc0El9BneyIeVb",
          ref: useRef(),
        },
        {
          id: 9,
          title: "Te Suplico Vuelvas Ya",
          fileName: "09 Te Suplico Vuelvas Ya.mp3",
          album: "volume-1",
          link: "https://buy.stripe.com/9AQdSI3Qx4h39eofZe",
          ref: useRef(),
        },
        {
          id: 10,
          title: "Regalame Esta Noche",
          fileName: "10 Regalame Esta Noche.mp3",
          link: "https://buy.stripe.com/14kbKAgDj00NaiseV9",
          album: "volume-1",
          ref: useRef(),
        },
      ],
    },
    {
      albumName: "Vol. 2",
      href: "volume-2",
      songs: [
        {
          id: 11,
          title: "Lloraras Lloraras",
          fileName: "01 Lloraras Lloraras.mp3",
          album: "volume-2",
          link: "https://buy.stripe.com/14k7ukfzffZL2Q0bIW",
          ref: useRef(),
        },
        {
          id: 12,
          title: "Llegó Borracho El Borracho",
          fileName: "02 Llegó Borracho El Borracho.mp3",
          album: "volume-2",
          link: "https://buy.stripe.com/cN29Cs4UBcNz4Y828l",
          ref: useRef(),
        },
        {
          id: 13,
          title: "Mirame",
          fileName: "03 Mirame.mp3",
          album: "volume-1",
          link: "https://buy.stripe.com/8wMbKAgDjcNzfCMeV6",
          ref: useRef(),
        },
        {
          id: 14,
          title: "You Lose a Good Thing",
          fileName: "04 You Lose a Good Thing.mp3",
          album: "volume-2",
          link: "https://buy.stripe.com/aEUdSI86N9Bn1LW28j",
          ref: useRef(),
        },
        {
          id: 15,
          title: "Adios Amigos (Ya Me Voy Para La Guerra)",
          fileName: "05 Adios Amigos (Ya Me Voy Para La Guerra).mp3",
          album: "volume-2",
          link: "https://buy.stripe.com/28o9Cs72J3cZ9eocMW",
          ref: useRef(),
        },
      ],
    },
    {
      albumName: "Vol. 3",
      href: "volume-3",
      songs: [
        {
          id: 16,
          title: "I Know I Know",
          fileName: "01 I Know I Know.mp3",
          album: "volume-1",
          link: "https://buy.stripe.com/cN2g0Q9aR8xj76g8wF",
          ref: useRef(),
        },
        {
          id: 17,
          title: "Flores Artificiales",
          fileName: "02 Flores Artificiales.mp3",
          album: "volume-3",
          link: "https://buy.stripe.com/aEUg0QgDj4h3eyIbIQ",
          ref: useRef(),
        },
        {
          id: 3,
          title: "Are You Ready",
          fileName: "03 Are You Ready.mp3",
          album: "volume-1",
          link: "https://buy.stripe.com/aEUg0QgDj4h3eyIbIQ",
          ref: useRef(),
        },
        {
          id: 18,
          title: "Te Siento Tan Lejos",
          fileName: "04 Te Siento Tan Lejos.mp3",
          album: "volume-3",
          link: "https://buy.stripe.com/eVa01S3Qx7tf4Y86ov",
          ref: useRef(),
        },
        {
          id: 19,
          title: "Dulce Miel de Bella Flor",
          fileName: "05 Dulce Miel de Bella Flor.mp3",
          album: "volume-3",
          link: "https://buy.stripe.com/6oE8yofzf6pbbmw8wX",
          ref: useRef(),
        },
        {
          id: 20,
          title: "Donde Esta Mi Padre",
          fileName: "06 Donde Esta Mi Padre.mp3",
          album: "volume-3",
          link: "https://buy.stripe.com/9AQdSIfzf14R62cbJa",
          ref: useRef(),
        },
        {
          id: 21,
          title: "Poco a Poco",
          fileName: "07 Poco a Poco.mp3",
          album: "volume-1",
          link: "https://buy.stripe.com/5kAaGw72J5l7duE14x",
          ref: useRef(),
        },
        {
          id: 22,
          title: "Porque No Me Dijiste Adios",
          fileName: "08 Porque No Me Dijiste Adios.mp3",
          album: "volume-3",
          link: "https://buy.stripe.com/6oE01Sdr78xj4Y83cG",
          ref: useRef(),
        },
        {
          id: 23,
          title: "Hoy Te Vengo a Cantar",
          fileName: "09 Hoy Te Vengo a Cantar.mp3",
          ref: useRef(),
          album: "volume-3",
          link: "https://buy.stripe.com/bIYcOEaeV9Bn1LW6oT",
        },
        {
          id: 24,
          title: "Mi Vida",
          fileName: "10 Mi Vida.mp3",
          album: "volume-3",
          link: "https://buy.stripe.com/4gw15W1Ip8xjgGQeVq",
          ref: useRef(),
        },
      ],
    },
  ];

  const tileStyle = {
    height: 300,
    width: 300,
    display: "flex",
    justifyContent: "center",
    margin: 5,
    position: "relative",
    overflow: "hidden",
  };

  const SongCell = ({ params }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    console.log("isplaying");
    console.log(isPlaying);
    // song cell
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <IconButton onClick={() => playSong(params.row.ref, setIsPlaying)}>
          {isPlaying ? (
            <PauseCircleIcon style={{ color: "white" }} />
          ) : (
            <PlayCircleIcon style={{ color: "white" }} />
          )}
        </IconButton>
        <span style={{ marginLeft: "5px" }}>{params.row.title}</span>

        <audio ref={params.row.ref} title={params.row.title}>
          <source
            src={`/assets/songs/${params.row.album}/${params.row.fileName}`}
            type="audio/mpeg"
          />
          Your browser does not support the audio element.
        </audio>
      </div>
    );
  };

  const playSong = (ref, setIsPlaying) => {
    try {
      if (!ref.current.paused) {
        console.log("pause");
        ref.current.pause();
        setIsPlaying(false);

        // const newSongs = songsPlaying;
        // const currentSongIndex = newSongs.indexOf(id);
        // if (currentSongIndex > -1) {
        //   delete newSongs[currentSongIndex];
        // }

        // setSongsPlaying(newSongs);
      } else {
        console.log("play");
        ref.current.play();
        setIsPlaying(true);

        // const newSongs = songsPlaying;
        // if (newSongs.indexOf(id) === -1) {
        //   newSongs.push(id);
        // }

        // setSongsPlaying(newSongs);
      }

      // if (
      //   ref.current.paused &&
      //   ref.current.currenTime > 0 &&
      //   !ref.current.ended
      // ) {
      //   console.log("play");
      //   ref.current.play();
      // }
      // if (
      //   ref.current.paused &&
      //   ref.current.currentTime === 0 &&
      //   !ref.current.ended
      // ) {
      //   console.log("play 2");
      //   ref.current.play();
      // }
    } catch (e) {
      console.log(e);
    }
  };

  const [columns, setColumns] = useState([
    {
      field: "title",
      headerName: "",
      flex: 1,
      renderCell: (params) => {
        return <SongCell params={params} />;
      },
    },
    {
      field: "actions",
      headerName: "",
      flex: 1,
      renderCell: (params) => (
        <a href={params.row.link} target="_blank">
          <Button
            sx={{
              background: "none",
              border: "1px solid white",
              color: "white",
              borderRadius: 0,
            }}
            variant="contained"
          >
            Buy ($2.00)
          </Button>
        </a>
      ),
    },
  ]);

  const handleScroll = (id) => {
    const scroll = new window.SmoothScroll();
    scroll.animateScroll(document.querySelector(`#${id}`), null, {
      speed: 1000,
    });
  };

  const handlePurchase = (row) => {
    alert(`You purchased ${row.title}`);
  };

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
        <Grid container spacing={2} sx={{ marginBottom: 25 }}>
          <Grid item size={7}>
            {/* <Typography
              variant="h2"
              style={{
                fontFamily: "Rye, serif",
                fontWeight: 400,
                color: "#ffffa5",
                fontStyle: "normal",
              }}
            >
              LOS RIOS BROS
            </Typography> */}
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div style={tileStyle}>
                <img
                  src={BandImage1}
                  style={{ height: 380 }}
                  alt="Los Rios Bros"
                />
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background: "yellow",
                    opacity: 0.3,
                  }}
                ></div>
              </div>
              <div style={tileStyle}>
                <img
                  src={BandImage2}
                  style={{ height: 300 }}
                  alt="Los Rios Bros"
                />
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background: "blue",
                    opacity: 0.4,
                  }}
                ></div>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div style={tileStyle}>
                <img
                  src={BandImage3}
                  style={{ height: 300, transform: "rotate(-90deg)" }}
                  alt="Los Rios Bros"
                />
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background: "green",
                    opacity: 0.4,
                  }}
                ></div>
              </div>
              <div style={{ ...tileStyle, border: "1px solid white" }}>
                <List
                  sx={{
                    width: 400,
                    bgcolor: "transparent",
                    color: "white",
                  }}
                >
                  {albums.map((album, index) => (
                    <a onClick={() => handleScroll(album.href)}>
                      <ListItem key={index} disableGutters>
                        <ListItemButton>
                          {" "}
                          <ListItemText primary={` ${album.albumName}`} />{" "}
                          <PlayCircleIcon />
                        </ListItemButton>
                      </ListItem>
                    </a>
                  ))}
                </List>
              </div>
            </div>
          </Grid>
          <Grid item size={5}>
            {albums.map((album) => (
              <div id={`${album.href}`}>
                {/* <Paper sx={{ height: 400, width: "100%", margin: "0px" }}> */}
                <DataGrid
                  slots={{
                    columnHeaders: () => (
                      <div
                        style={{
                          width: "100%",
                          textAlign: "left",
                          padding: 10,
                          background: "black",
                        }}
                      >
                        {album.albumName}
                      </div>
                    ),
                  }}
                  hideFooter={true}
                  rows={album.songs}
                  columns={columns}
                  autoHeight
                  sx={{
                    border: 0,
                    background: "transparent",
                    color: "white",
                  }}
                />
                {/* </Paper> */}
              </div>
            ))}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
