import React, {useState} from 'react';
import './boxBrowser.css';

function search(props){
    props.search('loading');
}

function BoxBrowser(props){
    const [clave, setClave] = useState('');

    const saveOptionFilter = (option) => {
        const index = props.filter.indexOf(option);
        if(index === -1){
            props.setFilter([...props.filter,option])
        }else{
            const newArray = props.filter;
            newArray.splice(index,1);
            props.setFilter(newArray);
        }
    }

    return (
        <div className="row" id="container-browser-box">
            <div className="col col-12">
                <div className="card" id="browser-box">
                    <div className="input-group mb-3">
                        <input type="text" onChange={(e) => setClave(e.target.value)} className="form-control" placeholder="Ejemplo: 'Naruto'" aria-label="Recipient's username" aria-describedby="button-addon2" />
                        <button className="btn btn-outline-secondary button-browser" type="button" onClick={() => {search(props);props.setClave(clave)}}>Buscar</button>
                        <div className="btn-group ms-2">
                            <button className="btn btn-secondary dropdown-toggle button-browser"  type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                Filtrar
                            </button>
                            <ul className="dropdown-menu ps-3" aria-labelledby="dropdownMenuButton">
                                <li>
                                    <div className="form-check">
                                        <input className="form-check-input" onClick={() => saveOptionFilter("Action")} type="checkbox" value="" id="flexCheckDefault" />
                                        <label className="form-check-label">
                                            Accion
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div className="form-check">
                                        <input className="form-check-input" onClick={() => saveOptionFilter("Comedy")} type="checkbox" value="" id="flexCheckDefault" />
                                        <label className="form-check-label">
                                            Comedia
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div className="form-check">
                                        <input className="form-check-input" onClick={() => saveOptionFilter("Adventure")} type="checkbox" value="" id="flexCheckDefault" />
                                        <label className="form-check-label">
                                            Aventura
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div className="form-check">
                                        <input className="form-check-input" onClick={() => saveOptionFilter("Drama")} type="checkbox" value="" id="flexCheckDefault" />
                                        <label className="form-check-label">
                                            Drama
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div className="form-check">
                                        <input className="form-check-input" onClick={() => saveOptionFilter("Supernatural")} type="checkbox" value="" id="flexCheckDefault" />
                                        <label className="form-check-label">
                                            Supernatural
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div className="form-check">
                                        <input className="form-check-input" onClick={() => saveOptionFilter("Fantasy")} type="checkbox" value="" id="flexCheckDefault" />
                                        <label className="form-check-label">
                                            Fantasia
                                        </label>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BoxBrowser;