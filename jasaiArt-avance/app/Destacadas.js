
import './css/Destacadas.css';

const Destacadas = () => {
    return (
        <>
            <div className="row-Obras">
                <div className="divObras">
                    <h1 className='txtObras'>OBRAS DESTACADAS</h1>
                </div>

                <div className="contenedorImagenes">

                    <div className="columnasImagenesObras">
                        <div className="imagenTexto1">
                            <img src="https://web.opendrive.com/api/v1/download/file.json/NDFfNTQ4MDY1NjlfTHRVNnI?session_id=3a6238c3dbf44f2a48119e3c31ba8269b53173d247cfbb6ee6b84a8592cb6c16&inline=1&preview=1" className="ImagenesObras" />
                            <div className="txt-PrecioObraDestacada">
                                <p className='nombreObra'>$299</p>
                                <p className='PintorObra'>Bird</p>
                                <p className='DescripcionObra'>McGill Library</p>
                            </div>
                        </div>
                    </div>

                    <div className="columnasImagenesObras">
                        <div className="imagenTexto2">
                            <img src="https://web.opendrive.com/api/v1/download/file.json/NDFfNTQ4MDY1NzBfM0h6SFE?session_id=3a6238c3dbf44f2a48119e3c31ba8269b53173d247cfbb6ee6b84a8592cb6c16&inline=1&preview=1" className="ImagenesObras" />
                            <div className="txt-PrecioObraDestacada">
                                <p className='nombreObra'>$499</p>
                                <p className='PintorObra'>Abode</p>
                                <p className='DescripcionObra'>Adriana Geo</p>
                            </div>
                        </div>
                    </div>

                    <div className="columnasImagenesObras">
                        <div className="imagenTexto3">
                            <img src="https://web.opendrive.com/api/v1/download/file.json/NDFfNTQ4MDY1NzFfNE90NGE?session_id=3a6238c3dbf44f2a48119e3c31ba8269b53173d247cfbb6ee6b84a8592cb6c16&inline=1&preview=1" className="ImagenesObras" />
                            <div className="txt-PrecioObraDestacada">
                                <p className='nombreObra'>$499</p>
                                <p className='PintorObra'>Briming</p>
                                <p className='DescripcionObra'>Museums Trust</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Destacadas;