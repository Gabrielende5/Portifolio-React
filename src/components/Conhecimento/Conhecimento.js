import { useState } from "react";
import "./Conhecimento.css"
import { ArrowRightCircle } from "react-bootstrap-icons";
import logo3 from "../../assets/img/images9.png"
import trilha from "../../assets/img/trilha-transparente.png"

export const Conhecimento = () => {
    const [isHovered, setIsHovered] = useState(false);
    const handleMouseEnter = () => {
        setIsHovered(true);
      };
    const handleMouseLeave = () => {
        setIsHovered(false);
      };
    return (
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
                        <button onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="conhecer"> Conheça nossos cursos {isHovered && <ArrowRightCircle/>}</button>
                    </div>
                </div>
            
        </div>
        
    )
}