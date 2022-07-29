import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className='navbar'>
        <Link href="/" passhref>
            <h2 className='pointer'>Djamel Abbou</h2>
        </Link>
        <Link>
            <h2></h2> 
        </Link>
    </nav>
  )
}