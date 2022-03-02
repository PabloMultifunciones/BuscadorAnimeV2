import React from 'react';
import './cardAnime.css';

function CardAnime(props){
    if(props.anime.synopsis !== null){
        const titleLength = props.anime.title.length; 
        return(
            <div className="col col-12 col-sm-6 col-lg-4 mt-3 mb-3">
                <div className="card m-3" id="card-anime">
                    <img src={props.anime.images.jpg.image_url} id="image-anime" alt={props.anime.title} />
                    <div id="button-container">
                        <a rel="noreferrer" target="_blank" href={props.anime.url}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" id="svg-icon"><path d="m13 3 3.293 3.293-7 7 1.414 1.414 7-7L21 11V3z"></path><path d="M19 19H5V5h7l-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5l-2-2v7z"></path></svg>
                        </a>
                    </div>
                    <div className="p-3">
                        <h3>{props.anime.title}</h3>
                        <div>
                            {props.anime.genres.map(genere => <div key={genere.mal_id} id="genere">{genere.name}</div>)}
                        </div>
                        <p>{(props.anime.synopsis.length >= (200-titleLength)) ? props.anime.synopsis.slice(0,200-titleLength)+"..." : props.anime.synopsis}</p>
                    </div>
                </div>
            </div>
        );
    }else{
        return (<></>);
    }
}

export default CardAnime;