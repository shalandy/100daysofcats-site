import React from 'react'
import Link from 'gatsby-link'
import '../layouts/index.css'

const Header = () => (
  <div
    style={{
      background: 'white',
      marginTop: '1.45rem',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'black',
            textDecoration: 'none',
          }}
        >
          {"100 Days of Cats"}
        </Link>
      </h1>

      <h2 style={{ margin: 0 }}>
      <a
        href="https://shalandy.wixsite.com/100daysofcats/thumbnails"
        style={{textDecoration: "none",}}
      >
        Thumbnails
      </a>
      &nbsp; | &nbsp;
        <a
          href="https://www.instagram.com/100daysof_cats/"
          style={{
            textDecoration: 'none',
          }}
        >
          Instagram
        </a>
      </h2>

    </div>
  </div>
)

export default Header
