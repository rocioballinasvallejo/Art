import Link from "next/link";
import "./css/footer.css"


const Footer = () => {
    return (

        <footer>
            <div className="container-footer">
                <div className="logo-footer">
                    <img src="https://web.opendrive.com/api/v1/download/file.json/NDFfNTQ4MDY1ODRfY01td1c?session_id=3a6238c3dbf44f2a48119e3c31ba8269b53173d247cfbb6ee6b84a8592cb6c16&inline=1&preview=1" className="LogoFooter" />
                </div>
                <div className="footer-titles">
                    <h4>CONTÁCTANOS</h4>
                    <h4><img src="https://web.opendrive.com/api/v1/download/file.json/NDFfNTQ4MDY1ODNfMEZJZW0?session_id=3a6238c3dbf44f2a48119e3c31ba8269b53173d247cfbb6ee6b84a8592cb6c16&inline=1&preview=1" className="logosIconos" /> +52 968 109 6112</h4>
                    <h4><img src="https://web.opendrive.com/api/v1/download/file.json/NDFfNTQ4MDY1ODZfNUduNDA?session_id=3a6238c3dbf44f2a48119e3c31ba8269b53173d247cfbb6ee6b84a8592cb6c16&inline=1&preview=1" className="logosIconos" /> jasaiart@gmail.com</h4>
                </div>

                <div className="footer-titles">
                    <h4>REDES SOCIALES</h4>
                    <h4>
                        <img src="https://web.opendrive.com/api/v1/download/file.json/NDFfNTQ4MDY1ODVfVmNJZTY?session_id=3a6238c3dbf44f2a48119e3c31ba8269b53173d247cfbb6ee6b84a8592cb6c16&inline=1&preview=1" className="logosRedesIconos" />
                        <img src="https://web.opendrive.com/api/v1/download/file.json/NDFfNTQ4MDY1NzlfSThMaXc?session_id=3a6238c3dbf44f2a48119e3c31ba8269b53173d247cfbb6ee6b84a8592cb6c16&inline=1&preview=1" className="logosRedesIconos" />
                        <img src="https://web.opendrive.com/api/v1/download/file.json/NDFfNTQ4MDY1ODFfaU41MXA?session_id=3a6238c3dbf44f2a48119e3c31ba8269b53173d247cfbb6ee6b84a8592cb6c16&inline=1&preview=1" className="logosRedesIconos" />
                    </h4>
                </div>

                <div className="footer-titles">
                    <h4>MEDIOS DE PAGO</h4>
                    <h4>
                        <img src="https://web.opendrive.com/api/v1/download/file.json/NDFfNTQ4MDY1ODBfc0ZHeEc?session_id=3a6238c3dbf44f2a48119e3c31ba8269b53173d247cfbb6ee6b84a8592cb6c16&inline=1&preview=1" className="logosRedesIconos" />
                        <img src="https://web.opendrive.com/api/v1/download/file.json/NDFfNTQ4MDY1ODJfQVVySDE?session_id=3a6238c3dbf44f2a48119e3c31ba8269b53173d247cfbb6ee6b84a8592cb6c16&inline=1&preview=1" className="logosRedesIconos" />
                    </h4>
                </div>
            </div>
        </footer>

    );
};

export default Footer;
