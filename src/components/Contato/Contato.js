import "./Contato.css"
import whats from "../../assets/img/whatsapp.svg"
import local from "../../assets/img/images12.svg"

export const Contato = () => {
    return(
        
    <div>
        
        <div className="espaçamento"></div>
            
        
        <div className='all3'>
                <div className="footer">
                    <div className="esquerda2">
                        <div className="cima">
                            <h1>
                                Contato
                            </h1>
                        </div>
                        <div className="esquerda-direita">
                            <div className="esquerda-all">
                                <div className="esquerda-t">
                                    <button>
                                        <img src={whats}></img>
                                    </button>
                                    
                                    <div>
                                        <div>
                                            (12) 99193-6532
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="direita-all">

                                <div className="direita-t">
                                    <button>
                                        <a href="https://www.google.com.br/maps/place/Av.+John+Fitzgerald+Kenedy,+50+-+Jardim+das+Nações,+Taubaté+-+SP,+12030-200/@-23.0275904,-45.567985,17z/data=!3m1!4b1!4m6!3m5!1s0x94ccf8f94a2184d3:0x43756662e9bb6f5c!8m2!3d-23.0275904!4d-45.567985!16s%2Fg%2F11c299s382?entry=ttu">
                                            <img src={local}></img>
                                        </a>
                                    </button>
                                    
                                    <div>
                                        <div> Av. John Fitzgerald Kenedy, 50 - Jardim das Nações, Taubaté - SP, 12030-200 </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="email">
                            mynds@mynds.com.br
                        </div>
                        
                    </div>
                    
                </div>
        </div>
            

    </div>

    )
}

