import Header from "./Header";
import Exhibits from "./Exhibits";
import ArtList from "./ArtList";
import Artists from "./Artists";
import ArtistForm from "./ArtistForm";
import ArtForm from "./ArtForm";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const baseUrl = "http://localhost:9292/";

function App() {
  const [exhibits, setExhibits] = useState([]);
  const [artists, setArtists] = useState([]);
  const [arts, setArts] = useState([]);
  const [exhibitArts, setExhibitArts] = useState([]);
  const [artistArts, setArtistArts] = useState([]);

  const fetchData = (urlParams = "", setter) => {
    fetch(`${baseUrl}${urlParams}`)
      .then((res) => res.json())
      .then((data) => setter(data));
  };

  useEffect(() => {
    fetchData("exhibits", setExhibits);
    fetchData("artists", setArtists);
    fetchData("art", setArts);
  }, []);

  const renderArt = (art) => {
    setArtists([...arts, art]);
    console.log(`art ${art.title} added`);
  };
  const renderArtist = (artist) => {
    setArtists([...artists, artist]);
    console.log(`artist ${artist.first_name} added`);
  };

  //gets data with an id and updates to state
  const onExhibitClick = (event) =>
    fetchData(`exhibits/${event.target.id}/arts`, setExhibitArts);
  const onArtistClick = (event) =>
    fetchData(`artists/${event.target.id}/arts`, setArtistArts);

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            exact
            path="/"
            element={<Exhibits exhibits={exhibits} onClick={onExhibitClick} />}
          />
          <Route
            path="/arts"
            element={<ArtList arts={exhibitArts} artists={artists} />}
          />
          <Route
            path="/art"
            element={
              <ArtList
                arts={arts}
                artists={artists}
                handleClick={onArtistClick}
              />
            }
          />
          <Route
            path="/artists"
            element={<Artists artists={artists} onClick={onArtistClick} />}
          />
          <Route
            path="/artists/arts"
            element={<ArtList arts={artistArts} artists={artists} />}
          />
          <Route path="/add-art" element={<ArtForm renderArt={renderArt} />} />
          <Route
            path="/add-artist"
            element={<ArtistForm renderArtist={renderArtist} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
