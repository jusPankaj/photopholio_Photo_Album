import React, { useState } from 'react'
import ImagesList from './ImagesList'

const AlbumList = () => {

  const [showAlbumForm, setShowAlbumForm ] = useState(false);

  const handleToggleAlbumForm = () => {
    setShowAlbumForm(!showAlbumForm);
  }

  return (
    <>
      <div>
        <h2>Your Albums</h2>
        <button>Add Album</button>

        {/* Display album list from database */}

        <button onClick={handleToggleAlbumForm}>
          {showAlbumForm ? 'Cancel' : 'Add album'}
        </button>

      <ImagesList />
      </div>
    </>
  )
}

export default AlbumList