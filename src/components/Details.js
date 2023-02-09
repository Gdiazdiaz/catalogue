import React, { useEffect } from 'react';
import { useParams, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { dataList } from './../redux/home/home';

function Details(){
    const dispatch = useDispatch();
    const parameters = useParams();
    const { name } = parameters;
    const listOfData = useSelector((state) => state.home)
    useEffect(() => {
        if(!listOfData.length){
            dispatch(dataList());
        }
    }, []);
    const filteredList = listOfData.filter((item) => item.name === name,);
    return(
        <div>
            <NavLink className={({ isActive }) => (isActive ? 'activeLink' : 'homeLink')} to="/" type="button"><h1>&lt;</h1></NavLink>
            {
                filteredList.map((character) => (
                    <div>
                        <img src={character.imageUrl}/>
                        <h3>{character.name}</h3>
                        <h4>Films: {character.films.length}</h4>
                        <h4>Allies: {character.allies.length}</h4>
                        <h4>Enemies: {character.enemies.length}</h4>
                        <h4>Park Atractions: {character.parkAttractions.length}</h4>
                        <h4>TV Shows: {character.tvShows.length}</h4>
                        <h4>Video Games: {character.videoGames.length}</h4>
                    </div>
                ))
            }
        </div>
    );
}

export default Details;