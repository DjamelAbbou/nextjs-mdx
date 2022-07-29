import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className='navbar'>
        <Link href="/" passhref>
            <h2 className='pointer index'>Djamel Abbou</h2>
        </Link>
        <Link href="/bio" passhref>
            <p className='pointer'>Bio</p> 
        </Link>
    </nav>
  )
}
