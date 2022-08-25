import React from 'react';
import Artist from './Artist';

const Artists = ({ artists, onClick }) => {
  if (!artists || artists.length === 0) {
    return <div>Nothing to display...</div>
  }
   const artist_list = artists.map(artist => (
      <Artist
         key={artist.id}
         id={artist.id}
         first_name={artist.first_name}
         last_name={artist.last_name}
         location={artist.location}
         age={artist.age}
         onClick={onClick}
         />
      ))

  return (
    <div>
      {artist_list}
    </div>
  )
}

export default Artists