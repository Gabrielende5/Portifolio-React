import { useState, useEffect } from "react"; /* Gerenciando o estado e efeitos colaterais */
import { Navbar, Nav, Container } from "react-bootstrap"; /* COmponentes do bootsrap para criar uma barra de navegação */
import logo from '../assets/img/images2.png'; /* Importa imagens que são usadas na barra de navegação */
import search from '../assets/img/image4.png';
import navIcon1 from '../assets/img/nav-icon1.svg'; 
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import { HashLink } from 'react-router-hash-link'; /* Um componente para criar link que rolam para âncoras dentro da mesma página*/
import {BrowserRouter as Router} from "react-router-dom"; /* Habilita o roteamento */
/*  */

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home'); /* Estado para controlar qual link está ativo */
  const [scrolled, setScrolled] = useState(false); /* Estado para controlar se a página foi rolada além de um certo ponto */

  useEffect(() => { /* useEffect: Adiciona um efeito colateral para rolagem(scroll) quando o componente é montado e remove-o quando é desmontado */
    const onScroll = () => { /* onScroll: Função que verifica se a página foi rolada além de 50 pixels e atualiza o estado scrolled conforme necessário */
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => { /* onUpdateActiveLink: Atualiza o estado activeLink quando um link na barra de navegação é clicado */
    setActiveLink(value);
  }
{/* */}
  return (
    <Router> {/* Router: Envolve a barra de navegação para habilitar o roteamento */}
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}> {/* Navbar: Componente principal da barra de navegação */}
        <Container> {/* Container: Componente de layout do Bootstrap */}
          <Navbar.Brand href="/"> {/*  Navbar.Brand: Exibe o logo*/}
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"> {/* Navbar.Toggle: Botão para exibir/ocultar a navegação em dispositivos móveis */}
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav"> {/* Navbar.Collapse: Contém os links de navegação. */}
            <Nav className="ms-auto"> {/* Nav: Agrupa os links de navegação */}
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link> {/* Nav.Link: Cada link de navegação, que atualiza o estado activeLink ao ser clicado */}
              <Nav.Link href="#QS" className={activeLink === 'QS' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('QS')}>Quem somos</Nav.Link>
              <Nav.Link href="#cursos" className={activeLink === 'cursos' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('cursos')}>Cursos</Nav.Link>
              <Nav.Link href="#Blog" className={activeLink === 'blog' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('blog')}>Blog</Nav.Link>
              
              </Nav>
            <span className="navbar-text"> {/* navbar-text: Contém ícones de redes sociais e um botão */}
              <div className="social-icon">
                <a href="#"><img src={navIcon1} alt="" /></a>
                <a href="#"><img src={navIcon2} alt="" /></a>
                <a href="#"><img src={navIcon3} alt="" /></a>
              </div>
              <HashLink to='#search'> {/* HashLink: Link que rola para a seção "search" da página. */}
                <button className="vvd"><span>🔎</span></button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}