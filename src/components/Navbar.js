import React from 'react'
import '../../src/index.css'

const Navbar = () => {
  return (
    <>
        <nav className='nav-container'>
            <img src="https://img.icons8.com/quill/50/photo-album.png" alt="logo"/>            
            <ul className='nav-ul'>
                <li>Photopholio</li>
                <li>Albums</li>
                {/* <li>Images</li> */}
            </ul>
        </nav>
    </>
  )
}

export default Navbar