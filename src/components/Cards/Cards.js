import card1 from "../../assets/img/images6.png"
import card2 from "../../assets/img/images7.png"
import card3 from "../../assets/img/images8.png"
import "./Cards.css"
export const Cards = () => {
    return(
        <section className="card-all">
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

        </section>
    )
}