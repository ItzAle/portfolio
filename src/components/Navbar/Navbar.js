import Link from 'next/link'
import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
  <div>
      <section>
        <nav>
          <Link href={""}>
            <h1 className='logo'>ale.dev</h1>
          </Link>
          <div className="nav">
            <Link href={""}>
              <p>Home</p>
            </Link>
            <Link href={'/'}>
              <p>About</p>
            </Link>
            <Link href={"/favorites"}>
              <p>Projects</p>
            </Link>
            <Link href={"/favorites"}>
              <p>Contact</p>
            </Link>
          </div>
        </nav>
      </section>
    </div>
  )
}
export default Navbar