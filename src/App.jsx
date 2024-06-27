import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Kerala Tourism</title>
  <link rel="stylesheet" href="styles.css" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
  <link
    href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap"
    rel="stylesheet"
  />
  <header className="hero">
    <div className="container">
      <nav className="navbar">
        <div className="logo">
          <img
            src="https://ih1.redbubble.net/image.1121199281.3418/st,small,507x507-pad,600x600,f8f8f8.webp"
            alt="logo"
            height="140px"
          />
        </div>
        <h1 className="heading">
          <b>WELCOME TO KERALA TOURISM</b>
        </h1>
        <ul className="nav-links">
          <li className="nav-item">
            <a href="#">Home</a>
          </li>
          <li className="nav-item">
            <a href="#">Districts</a>
          </li>
          <li className="nav-item">
            <a href="#">Login</a>
          </li>
          <li className="nav-item">
            <a href="#">Signup</a>
          </li>
          {/* <li class="nav-item"><a href="#">About Us</a></li> */}
        </ul>
      </nav>
    </div>
    <main className="content">
      <div className="image-gallery">
        <div className="image-item">
          <img
            src="./images/athirappilly-hill-waterfalls.jpg"
            alt="Athirappalli Waterfalls"
            
          />
          <p>Athirappalli Waterfalls</p>
        </div>
        <div className="image-item">
          <img
            src="./images/photo-1491497895121-1334fc14d8c9.avif"
            alt="Munnar"
          />
          <p>Munnar</p>
        </div>
        <div className="image-item">
          <img src="./images/wp7877187.webp" alt="Alleppey Backwaters" />
          <p>Alleppey Backwaters</p>
        </div>
        <div className="image-item">
          <img src="./images/wp11428547.webp" alt="Thekkady" />
          <p>Thekkady</p>
        </div>
      </div>
      <div className="image-gallery">
        <div className="image-item">
          <img
            src="https://www.keralatourism.org/images/eco-tourism/gal_1.jpg"
            alt="Bhoothathankettu Dam"
          />
          <p>Bhoothathankettu Dam</p>
        </div>
        <div className="image-item">
          <img
            src="https://www.keralatourism.org/images/eco-tourism/gal_10.jpg"
            alt="Dhoni Waterfalls"
          />
          <p>Dhoni Waterfalls</p>
        </div>
        <div className="image-item">
          <img
            src="https://www.keralatourism.org/images/destination/large/devikulam_hills_in_munnar20131031103731_132_1.jpg"
            alt="Devikulam Hills"
          />
          <p>Devikulam Hills</p>
        </div>
        <div className="image-item">
          <img
            src="https://www.keralatourism.org/images/destination/large/kovalam20131031105847_236_1.jpg"
            alt="Kovalam"
          />
          <p>Kovalam</p>
        </div>
      </div>
    </main>
  </header>
  <footer>
    <p>© 2024 Kerala Tourism. All Rights Reserved.</p>
  </footer>
</>

  )
}

export default App
