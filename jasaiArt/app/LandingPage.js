
import './css/imgCenter.css';

const Landing = () => {
    return (
        <>
            <div className="contenedorCarousel">

                <div className="container-all">
                    <input type="radio" id='1' name='image-slide' hidden />
                    <input type="radio" id='2' name='image-slide' hidden />
                    <input type="radio" id='3' name='image-slide' hidden />

                    <div className="slide">
                        <div className="item-slide">
                            <img src="https://web.opendrive.com/api/v1/download/file.json/NDFfNTQ4MDY1MTVfMjJOemg?session_id=3a6238c3dbf44f2a48119e3c31ba8269b53173d247cfbb6ee6b84a8592cb6c16&inline=1&preview=1" />
                        </div>
                        <div className="item-slide">
                            <img src="https://web.opendrive.com/api/v1/download/file.json/NDFfNTQ4MDY1MzdfRWR5YU0?session_id=3a6238c3dbf44f2a48119e3c31ba8269b53173d247cfbb6ee6b84a8592cb6c16&inline=1&preview=1" />
                        </div>
                        <div className="item-slide">
                            <img src="https://web.opendrive.com/api/v1/download/file.json/NDFfNTQ4MDY1MzlfY2VJZXk?session_id=3a6238c3dbf44f2a48119e3c31ba8269b53173d247cfbb6ee6b84a8592cb6c16&inline=1&preview=1" />
                        </div>
                    </div>

                    <div className="pagination">
                        <label className='pagination-item' htmlFor="1">
                            <img src="https://web.opendrive.com/api/v1/download/file.json/NDFfNTQ4MDY1MTVfMjJOemg?session_id=3a6238c3dbf44f2a48119e3c31ba8269b53173d247cfbb6ee6b84a8592cb6c16&inline=1&preview=1" />
                        </label>
                        <label className='pagination-item' htmlFor="2">
                            <img src="https://web.opendrive.com/api/v1/download/file.json/NDFfNTQ4MDY1MzdfRWR5YU0?session_id=3a6238c3dbf44f2a48119e3c31ba8269b53173d247cfbb6ee6b84a8592cb6c16&inline=1&preview=1" />
                        </label>
                        <label className='pagination-item' htmlFor="3">
                            <img src="https://web.opendrive.com/api/v1/download/file.json/NDFfNTQ4MDY1MzlfY2VJZXk?session_id=3a6238c3dbf44f2a48119e3c31ba8269b53173d247cfbb6ee6b84a8592cb6c16&inline=1&preview=1" />
                        </label>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Landing;