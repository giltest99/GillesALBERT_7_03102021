import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/mono-groupo.svg'

export default function Navigation() {
  return (
    <header className='container-fluid' style={{backgroundColor:'white'}}>
      <nav style={{justifyContent:'space-between',alignItems:'center'}}>

        <img src={Logo} alt="logo groupomania" style={{width:'40%', minWidth:'6rem',padding:'1rem', minHeight:'3rem',height:'4rem'}}/>

        <ul>
          <li>
            <details role="list" dir="rtl">
              <summary role="link">Messages</summary>
              <ul role="listbox">
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
