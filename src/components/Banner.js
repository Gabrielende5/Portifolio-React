import { Container, Row, Col } from "react-bootstrap";
import logo2 from "../assets/img/images.png";
import { ArrowRightCircle } from "react-bootstrap-icons";
import React, { useState } from 'react';
import '../App.css';
import logo from "../assets/img/images2.png";
import TrackVisibility from 'react-on-screen';
import 'animate.css/animate.min.css';

export const Banner = () => {
  // Usa o hook useState para criar uma variável de estado chamada isHovered, inicialmente false.
  const [isHovered, setIsHovered] = useState(false);

  // Função que define isHovered como true quando o mouse entra no elemento.
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  // Função que define isHovered como false quando o mouse sai do elemento.
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <section className="banner" id="home">
      {/* Contêiner do react-bootstrap que centraliza e limita a largura do conteúdo. */}
      <Container>
        {/* Cria uma linha para a grade do Bootstrap com alinhamento central. */}
        <Row className="align-items-center">
          {/* Define uma coluna na grade que ocupa diferentes proporções da largura em diferentes tamanhos de tela, xs: Define que a coluna ocupará todas as 12 partes da largura da linha em telas extra pequenas (mobile); md: Define que a coluna ocupará 6 partes da largura da linha em telas médias (tablets); xl: Define que a coluna ocupará 7 partes da largura da linha em telas extra grandes (desktops grandes) */}
          <Col xs={12} md={6} xl={7}>
            {/* Componente TrackVisibility que verifica se o elemento está visível na tela. */}
            <TrackVisibility>
              {({ isVisible }) => 
                // Adiciona classes de animação se o elemento estiver visível.
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <div className="nitido"><img src={logo2} alt="Logo 2" /></div>
                  <p className="texto1">
                    Nossa Escola de Tecnologia está ansiosa para receber crianças e jovens entusiastas que queiram explorar o emocionante universo da <span className="enfase">Programação, Games e da Robótica</span>. Se você está pronto para investir no futuro do seu filho e oferecer a ele as ferramentas para se destacar, junte-se a nós na nossa jornada educacional.
                  </p>
                  {/* Botão que muda de aparência quando está com o mouse em cima e exibe um ícone. */}
                  <button onClick={() => console.log('connect')} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="Agendar">
                    Agende sua aula experimental {isHovered && <ArrowRightCircle />}
                  </button>
                </div>
              }
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                // Adiciona classes de animação com atraso se o elemento estiver visível.
                <div className={isVisible ? "animate__animated animate__fadeIn animate__delay-1s" : ""}>
                  <img src={logo} alt="Header Img" />
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
    
  );
};

export default Banner;
