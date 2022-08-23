import Header from "./Header";
import Exhibits from "./Exhibits";
import ArtList from "./ArtList";
import * as endpoints from "./endpoints";
import {useEffect, useState} from "react"
import { BrowserRouter, Routes, Route, Link } from 'react-router';

function App() {
  const [exhibits, setExhibits] = useState([])
  const [arts, setArts] = useState([])
  const [showArts, setShowArts] = useState(false)

  useEffect(() => {
    setExhibits(exhibits => endpoints.getExhibits())
  }, [])
  
  const onExhibitClick = (e) => {
    let id = e.target.id
    setArts(endpoints.getArtsByExhibitId(id))
    setShowArts(showArts => !showArts)
  }

  return (
    <div className="App">
      <Header />
      <Exhibits exhibits={exhibits} onClick={onExhibitClick}/>
      {showArts ? <ArtList arts={arts}/> : "Nothing to show"}
    </div>
  );
}

export default App;
