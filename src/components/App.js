import Header from './Header';
import Exhibits from "./Exhibits";
import ArtList from "./ArtList";
import Artists from "./Artists";
import ArtistForm from "./ArtistForm";
import ArtForm from "./ArtForm";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [exhibits, setExhibits] = useState([]);
  const [artists, setArtists] = useState([]);
  const [arts, setArts] = useState([]);
  const [exhibitArts, setExhibitArts] = useState([]);
  const [artistArts, setArtistArts] = useState([]);
  const fetchData = (urlParams = "", setter) => 
  {
    fetch(`http://localhost:9292/${urlParams}`)
    .then(res => res.json())
    .then(data => setter(data))
  }
   
  //gets all exhibits and updates to state
  const fetchExhibits = () => fetchData("exhibits", setExhibits)

  //gets all artists and updates to state
  const fetchArtists = () => fetchData("artists", setArtists)
  
  //gets all artwork and updates to state
  const fetchArtwork = () => fetchData("art", setArts)

  //gets data with an id and updates to state
  const onExhibitClick = (event) => fetchData(`exhibits/${event.target.id}/arts`, setExhibitArts)
  const onArtistClick = (event) =>  fetchData(`artists/${event.target.id}/arts`, setArtistArts)
  

  useEffect(() => {
    fetchExhibits()
  }, []);
  
  return (
    <div className="App">
      <BrowserRouter>
        <Header showAllExhibits={fetchExhibits} showAllArtists={fetchArtists} showAllArtwork={fetchArtwork} />
        <Routes>
          <Route exact path="/" element={<Exhibits exhibits={exhibits} onClick={onExhibitClick}/>} />
          <Route path="/arts" element={<ArtList arts={exhibitArts} />} />
          <Route path="/art" element={<ArtList arts={arts} artists={artists} />} />
          <Route path="/artists" element={<Artists artists={artists} onClick={onArtistClick}/>} />
          <Route path="/artists/arts" element={<ArtList arts={artistArts} />} />
          <Route path="/add-art" element={<ArtForm />} />
          <Route path="/add-artist" element={<ArtistForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
