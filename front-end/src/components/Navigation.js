import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/mono-groupo.svg'

export default function Navigation() {
  return (
    <header className='container-fluid grid' style={{backgroundColor:'white'}}>
        <nav className="container-fluid" style={{justifyContent:'space-between',alignItems:'center'}}>
        <Link to="/posts">
            <img src={Logo} alt="logo groupomania" style={{height:'80%', width:'50%'}}/>
        </Link>
        
        <ul>
          <li>
            <details role="list" dir="rtl">
              <summary role="link">Messages</summary>
              <ul role="listbox">
                {/* <li><Link to="/posts">Lire tous</Link></li> */}
                <li><Link to="/new-post">Ecrire</Link></li>
              </ul>
            </details>
          </li>
          <li>
            <details role="list" dir="rtl">
              <summary role="link">Profil</summary>
              <ul role="listbox">
                <li><Link to="/profile">Mon profil</Link></li>
                <li><Link to="/">Se déconnecter</Link></li>
              </ul>
            </details>
          </li>
        </ul>
      </nav>
    </header>
  )
}
