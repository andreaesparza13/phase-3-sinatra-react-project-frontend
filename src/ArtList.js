import React from 'react'
import Art from './Art'

export const ArtList = (arts) => {
  return (
    <div>
      {arts.map(art => (
         <Art 
            title={art.title}
            medium={art.medium}
            description={art.description}
            image_url={art.image_url}
         />)
      )}
    </div>
  )
}

export default ArtList;
