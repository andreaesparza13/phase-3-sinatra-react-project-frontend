import React from 'react';
import Artist from './Artist';

const Artists = ({ artists }) => {

   const artist_list = artists.map(artist => (
      <Artist
         key={artist.id}
         first_name={artist.first_name}
         last_name={artist.last_name}
         location={artist.location}
         age={artist.age}
         />
      ))

  return (
    <div>
      {artist_list}
    </div>
  )
}

export default Artists