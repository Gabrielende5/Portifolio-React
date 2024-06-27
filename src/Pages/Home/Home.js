import { Container, Row, Col } from "react-bootstrap";
import logo2 from "../../assets/img/images.png";
import { ArrowRightCircle } from "react-bootstrap-icons";
import React, { useState } from 'react';
import logo from "../../assets/img/images2.png";
import TrackVisibility from 'react-on-screen';
import 'animate.css/animate.min.css';
import card1 from "../../assets/img/images6.png"
import card2 from "../../assets/img/images7.png"
import card3 from "../../assets/img/images8.png"
import logo3 from "../../assets/img/images9.png"
import trilha from "../../assets/img/trilha-transparente.png"
import "./Home.css"
import { Link } from 'react-router-dom';
const Home = () => {
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
    return(
        <section className="allHome">
            <div className="one">
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
                                        <div className={isVisible ? "delay" : ""}> {/* Quando "isVisible" é verdade se ativa a classe "delay" */}
                                        <img src={logo} alt="Header Img" />
                                        </div>
                                    }
                                    </TrackVisibility>
                                </Col>
                                </Row>
                            </Container>
                        </section>           
                    </div>

                    <div className="two">
                    <section className="mais">
                    <div className="card-all">
                        <div className="cards">
                            <img src = {card1}></img> 
                            <div className="card-body">
                                <h1 className="card-title" color="whte">Programação Web e Mobile</h1>
                                <p className="card-text">Dominar a programação é incrívelmente vantajoso, pois aprimora o pensamento lógico e fortalece a habilidade de enfrentar desafios complexos, ao mesmo tempo em que desbloqueia um leque de possibilidades profissionais em um setor que está sempre evoluindo e buscando inovações.</p>
                            </div>
                        </div>
                        <div className="cards">
                            <img src = {card2}></img> 
                            <div className="card-body">
                                <h1 className="card-title" color="whte">Games</h1>
                                <p className="card-text">Dominar a arte de desenvolver games 2D e 3D é essencial numa era em que o entretenimento digital domina a cultura popular. Tal competência não apenas habilita os criadores a materializar suas ideias criativas e contar histórias de maneira interativa, mas também oferece entendimento avançado em diversas áreas técnicas.</p>
                            </div>
                        </div>
                        <div className="cards">
                            <img src = {card3}></img> 
                            <div className="card-body">
                                <h1 className="card-title" color="whte">Robótica</h1>
                                <p className="card-text">Dominar a robótica é vital, pois ela engloba a integração de campos como mecânica, eletrônica e programação. Esta aprendizagem estimula competências fundamentais,incluindo colaboração e raciocínio analítico, além de preparar os indivíduos para um mercado de trabalho iminente onde a automação tem grande destaque.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <div className="three">
                <section >
                        <div className="tudo">
                            <div className="imagem">
                                <img src={logo}></img>
                            </div>
                            <div className="all1">
                                <div className="part1">
                                    <span><h3 className="text0">POR QUE A</h3><h1>Mynds?</h1></span>
                                </div>
                                <div className="content">
                                    <p className="text3">
                                        <h5><span className="text3a5">Aprendizado Divertido:</span> Acreditamos que a aprendizagem deve ser divertida e envolvente. Nossas aulas são projetadas para despertar a curiosidade e a imaginação dos alunos, enquanto eles adquirem habilidades valiosas.</h5>
                                    </p>
                                    <p>
                                        <h5 className="text6"> <span className="text5">Mãos à Obra: </span>Nada supera a experiência prática. Os alunos terão a oportunidade de criar projetos reais, desde programas de computador até robôs funcionais, permitindo que apliquem o que aprenderam de maneira tangível.</h5>
                                    </p>
                                    <p>
                                        <h5 className="text8"> <span className="text7">Preparação para o Futuro: </span>A programação e a robótica são habilidades essenciais no mundo atual. Ao aprenderem desde cedo, os alunos estarão melhor preparados para enfrentar os desafios tecnológicos do amanhã.</h5>
                                    </p>
                                    <p>
                                        <h5 className="text10"> <span className="text9">Ambiente de Apoio: </span>Nossa escola oferece um ambiente acolhedor e de apoio, onde os alunos podem aprender sem medo de cometer erros. Celebramos o processo de aprendizagem e o crescimento constante.</h5>
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                </section>
            </div>

            <div className="four">
                <div className="all2">
                
                        <div className="esquerda1">
                            <div className="texto1">
                                <span><h1>Trilha do Conhecimento</h1></span>
                            </div>
                            <div className="imagem-trilha">
                                <img src={trilha}></img>
                            </div>
                        </div>
                        <div className="direita1">
                            <div className="imagem2">
                                <img src={logo3}></img>
                            </div>
                            <div className="text2">
                                <button onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="conhecer"> <Link to='/Cursos'> Conheça nossos cursos {isHovered && <ArrowRightCircle/>}</Link></button>
                            </div>
                        </div>
                    
                </div>
            </div>
        </section>
    );
};
export default Home;