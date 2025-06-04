import React from 'react'
import Noise from '../../assets/Noise.webp'

function Header({ children }) {
  return (
    <div
      style={{
        backgroundImage: `url(${Noise})`,
        backgroundBlendMode: 'overlay',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className="w-full h-full max-h-screen relative "
    >

      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}

export default Header
