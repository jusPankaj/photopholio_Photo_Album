import React from 'react'
import '../assets/css/AlbumForm.css'

const AlbumForm = () => {

    const handleInputChange = () => {

    }

    const handleCreateAlbum =()=> {
        
    }

    const handleClear = () => {

    }

  return (
    <>
        
        <div className='album-form-container'>
        
            <h1>Add Album</h1>
            <form className='album-form'>
              <input type="text" placeholder="Album Name" className='album-input' onChange={handleInputChange}/>
              <button onClick={handleClear} className='clearButton'>Clear</button>
              <button onClick={handleCreateAlbum} className='createButton'>Create</button>
            </form>
        </div>
        
    </>
  )
}

export default AlbumForm;