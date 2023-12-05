import '../css/Pintores.css';

const Pintores = () => {
    return (
        <>
            <div className="containerTarjetas">
                <div className="cardContainer">
                    <figure>
                        <img src="https://web.opendrive.com/api/v1/download/file.json/NDFfNTQ4MDY2MzBfZW14N2Y?session_id=3a6238c3dbf44f2a48119e3c31ba8269b53173d247cfbb6ee6b84a8592cb6c16&inline=1&preview=1" />
                    </figure>
                    <div className="infoArtista">
                        <h1>Carlos vivar</h1>
                        <p>
                            El artista concentra sus esfuerzos en la creación de espacios no
                            concretos, tratando de aislar la objetividad de sus temas, mostrando
                            al sujeto-objeto en todo su esplendor.
                        </p>
                        <a href="/InformacionDeContacto">Ver Arte</a>
                    </div>
                </div>

                <div className="cardContainer">
                    <figure>
                        <img src="https://web.opendrive.com/api/v1/download/file.json/NDFfNTQ4MDY2MzFfWGU3S0I?session_id=3a6238c3dbf44f2a48119e3c31ba8269b53173d247cfbb6ee6b84a8592cb6c16&inline=1&preview=1" />
                    </figure>
                    <div className="infoArtista">
                        <h1>Hugo Vázquez</h1>
                        <p>
                            El artista concentra sus esfuerzos en la creación de espacios no
                            concretos, tratando de aislar la objetividad de sus temas, mostrando
                            al sujeto-objeto en todo su esplendor.
                        </p>
                        <a href="/InformacionDeContacto">Ver Arte</a>
                    </div>
                </div>

                <div className="cardContainer">
                    <figure>
                        <img src="https://web.opendrive.com/api/v1/download/file.json/NDFfNTQ4MDY2MzJfQVlFTFU?session_id=3a6238c3dbf44f2a48119e3c31ba8269b53173d247cfbb6ee6b84a8592cb6c16&inline=1&preview=1" />
                    </figure>
                    <div className="infoArtista">
                        <h1>Jaime José</h1>
                        <p>
                            Jaime José ha sido considerado como un artista figurativo que juega
                            con dos manifestaciones la auto-critica y la crítica social haciendo
                            de ésta mezcla un sello muy personal
                        </p>
                        <a href="/InformacionDeContacto">Ver Arte</a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Pintores;