import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../../assets/img/images2.png';
import search from '../../assets/img/image4.png';
import navIcon1 from '../../assets/img/nav-icon1.svg';
import navIcon2 from '../../assets/img/nav-icon2.svg';
import navIcon3 from '../../assets/img/nav-icon3.svg';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import { router } from '../../Rotas';
import "./NavBar.css"

export const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      setScrollTop(window.scrollY);
    }

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [])
  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="esquerda-nav">
        <div className="nav-logo">                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
          {scrolled && <img src={logo} alt="Logo" />}
        </div>
      </div>
      <div className="direita-nav">
        <div className="links">
          <div><Link to='/'>Home</Link> </div> {/* Pode ser '' ou "" para um caminho */}
          <div><Link to='/Quem-somos'>Quem somos</Link></div>
          <div><Link to='/Cursos'>Cursos</Link></div>
          <div><Link to='/Blog'>Blog</Link></div>
        </div>
        <div className="social">
          <a href="#" className="a1"><img src={navIcon1} alt=""></img></a>
          <a href="#" className="a2"><img src={navIcon2} alt=""></img></a>
          <a href="#" className="a3"><img src={navIcon3} alt=""></img></a>
        </div>
        <div className="search">
          <button><span></span>🔎</button>
        </div>
      </div>
    </nav>
  )
}
export default NavBar