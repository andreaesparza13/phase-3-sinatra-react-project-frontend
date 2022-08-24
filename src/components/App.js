import Exhibits from "./Exhibits";
import ArtList from "./ArtList";
import Artists from "./Artists";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  const [exhibits, setExhibits] = useState([]);
  const [artists, setArtists] = useState([]);
  const [arts, setArts] = useState([]);

  const fetchData = (urlParams = "") => 
  {
    fetch(`http://localhost:9292/${urlParams}`)
    .then(res => res.json())
    .then(data => data)
  }

  const fetchExhibits = () => {
    // fetchData("exhibits")
  }

  const fetchArtists = () => {
    // fetchData("artists")
  }

  useEffect(() => {
    fetch(`http://localhost:9292/exhibits`)
    .then(res => res.json())
    .then(data => setExhibits(data))
  }, []);

  const onExhibitClick = (e) => { 
    // fetchData(`${e.target.id}/arts`)
    // .then(data => setArts(data))
    fetch(`http://localhost:9292/${e.target.id}/arts`)
    .then(res => res.json())
    .then(data => setArts(data))
  };

  const showAllArtists = () => {
    // fetchData("artists")
  }

  const showAllArtwork = () => {
    // fetchData("art")
  }
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Exhibits exhibits={exhibits} onClick={onExhibitClick}/>} />
          <Route path="/art" element={<ArtList arts={arts} />} />
          <Route path="/artists" element={<Artists artists={artists} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
