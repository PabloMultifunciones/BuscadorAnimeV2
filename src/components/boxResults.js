import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CardAnime from "./cardAnime.js";
import './boxResults.css';

function BoxResults(props){
    const [animes, setAnimes] = useState([]);

    const filterResult = (result) => {
        var arrayFilted = [];
        result.forEach(element => {
            var coincidencias = 0;
            element.genres.forEach(element => {
                if(props.filter.indexOf(element.name) !== -1){
                    coincidencias++;
                }
            });
            if(coincidencias > 0){
                arrayFilted.push(element);
            }
        });
        return arrayFilted;
    }

    useEffect(() =>{
        const state = props.state;
        if(state === 'loading'){
            axios.get(`https://api.jikan.moe/v4/anime?q=${props.clave}&sfw`)
            .then(response => {
                props.setState('results');
                var result = (props.filter.length === 0) ? response.data.data : filterResult(response.data.data);    
                setAnimes(result);
                }
            );
        }
    });

    if(props.state === "loading"){
        return (
            <div className="row" id="card-results-container">
                <div className="col col-12">
                    <div className="card" id="card-results">
                        <img src="/imgs/loading.gif" id="img-loading"/>
                    </div>
                </div>
            </div>
        );
    }else if(props.state === "results"){
        return(
            <div className="row" id="card-results-container">
                <div className="card pb-4" id="card-results">
                    <div className="row">
                        {animes.map(anime => <CardAnime key={anime.mal_id} anime={anime}/>)}
                    </div>
                </div>
            </div>
        );
    }else{
        return(<></>);
    }
}

export default BoxResults;