import React from 'react'
import Link from 'next/link'

const Nav = () => {
  return (
    <div className='max-w-[1280px] p-4'>
      <div className="nav-content">
        <div className="logo">Romaan</div>
        <div className="nav-links">
          <Link href="#">Home</Link>
          <Link href="#">Membership</Link>
          <Link href="#">About Us</Link>
          <Link href="#">Shop</Link>
        </div>
      </div>
    </div>
  )
}

export default Nav