import Header from './Header';
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
  const fetchData = (urlParams = "", setter) => 
  {
    fetch(`${baseUrl}${urlParams}`)
    .then(res => res.json())
    .then(data => setter(data))
  }
   
  //gets all exhibits and updates to state
  useEffect(() => {
    fetch(`${baseUrl}exhibits`)
    .then(res => res.json())
    .then(data => setExhibits(data))
  },[])

  //gets all artists and updates to state
  useEffect(() =>{
    fetch(`${baseUrl}artists`)
    .then(res => res.json())
    .then(data => setArtists(data))
  }, [])
  
  //gets all artwork and updates to state
  useEffect(() =>{
    fetch(`${baseUrl}art`)
    .then(res => res.json())
    .then(data => setArts(data))
  }, [])

  //gets data with an id and updates to state
  const onExhibitClick = (event) => fetchData(`exhibits/${event.target.id}/arts`, setExhibitArts)
  const onArtistClick = (event) =>  fetchData(`artists/${event.target.id}/arts`, setArtistArts)
  
  return (
    <div className="App">
      <BrowserRouter>
        <Header showAllExhibits={setExhibits} showAllArtists={setArtists} showAllArtwork={setArts} />
        <Routes>
          <Route exact path="/" element={<Exhibits exhibits={exhibits} onClick={onExhibitClick}/>} />
          <Route path="/arts" element={<ArtList arts={exhibitArts} artists={artists}/>} />
          <Route path="/art" element={<ArtList arts={arts} artists={artists} />} />
          <Route path="/artists" element={<Artists artists={artists} onClick={onArtistClick}/>} />
          <Route path="/artists/arts" element={<ArtList arts={artistArts} artists={artists}/>} />
          <Route path="/add-art" element={<ArtForm />} />
          <Route path="/add-artist" element={<ArtistForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
