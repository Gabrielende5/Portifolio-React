import { Container, Row, Col } from "react-bootstrap";
import logo2 from "../assets/img/images.png";
import { ArrowRightCircle } from "react-bootstrap-icons";
import React, { useState } from 'react';
import '../App.css';

export const Banner = () =>{
    //Criando o "isHovered" que inicialmente será falso
    const [isHovered, setIsHovered] = useState(false); 
    

    // Funções para manipular o estado de hover
    const handleMouseEnter = () => {
      setIsHovered(true);
    };
    const handleMouseLeave = () => {
      setIsHovered(false);
    };
    return(
        <section className="banner" id="home">
            <Container> {/* Este componente do react-bootstrap é um contêiner responsivo e fixo para centralizar e limitar a largura do conteúdo dentro dele */}
                <Row className="align-items-center"> {/* Um componente do react-bootstrap que cria uma linha (row) para a grade do Bootstrap. */}
                    <Col /* Um componente do react-bootstrap que define uma coluna (column) na grade. */
                    xs={12} /* Define que a coluna ocupará todas as 12 partes da largura da linha em telas extra pequenas (mobile). */
                    md={6} /* Define que a coluna ocupará 6 partes da largura da linha em telas médias (tablets) */
                    xl={7} /* Define que a coluna ocupará 7 partes da largura da linha em telas extra grandes (desktops grandes). */
                    > <div className="nitido"><img src={logo2}></img></div>
          
                    <l className="texto1">Nossa Escola de Tecnologia está ansiosa para receber crianças e jovens entusiastas que queiram explorar o emocionante universo da <l className="enfase">Programação, Games e da Robótica</l>. Se você está pronto para investir no futuro do seu filho e oferecer a ele as ferramentas para se destacar, junte-se a nós na nossa jornada educacional</l>
                    <button onClick={()=> console.log('connect')} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="Agendar" >Agende sua aula experimental {isHovered && <ArrowRightCircle/> }</button>
                    </Col>
                    <Col xs={12} md={6} xl={7}></Col>
                </Row>
            </Container>
        </section>
    );
};
export default Banner;

