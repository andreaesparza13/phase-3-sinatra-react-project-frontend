import Header from "./Header";
import Exhibits from "./Exhibits";
import ArtList from "./ArtList";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  const [exhibits, setExhibits] = useState([]);
  const [arts, setArts] = useState([]);
  const [showArts, setShowArts] = useState(false);

  useEffect(() => {
    fetch("http://localhost:9292/exhibits")
    .then(res => res.json())
    .then(data => setExhibits(data))
  }, []);

  const onExhibitClick = (e) => { 
    fetch(`http://localhost:9292/exhibits/${e.target.id}/arts`)
    .then((res) => res.json())
    .then(arts => {
      setArts(arts)
      setShowArts(true)})
  };
  
  return (
    <div className="App">
      <Header />
        {/* <Route path="/exhibits"> */}
        {exhibits?.length ? (
          <Exhibits exhibits={exhibits} onClick={onExhibitClick}/>
        ) : (
          "Loading..."
        )}
        {/* </Route> */}
        {/* <Route path="/Art"> */}
        {showArts ? <ArtList arts={arts} /> : "Nothing to show"}
        {/* </Route> */}
    </div>
  );
}

export default App;
