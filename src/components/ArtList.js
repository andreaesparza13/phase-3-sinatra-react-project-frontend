import React from 'react'
import Art from './Art'

export const ArtList = ({arts}) => {
  if(!arts || arts.length === 0) {
    return <div>Nothing to display...</div>
  }
  console.log(arts)
  return (
    <div>
      {arts.map(art => (
         <Art 
            title={art.title}
            medium={art.medium}
            description={art.description}
            image_url={art.image_url}
            key={art.id}
         />)
      )}
    </div>
  )
}

export default ArtList;
