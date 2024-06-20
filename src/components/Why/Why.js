import "./Why.css"
import logo from "../../assets/img/images2.png"
export const Why = () => {
    return (
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
    )
}