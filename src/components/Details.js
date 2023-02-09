import React, { useEffect } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { dataList } from '../redux/home/home';
import './Details.css';

function Details() {
  const dispatch = useDispatch();
  const parameters = useParams();
  const { name } = parameters;
  const listOfData = useSelector((state) => state.home);
  useEffect(() => {
    if (!listOfData.length) {
      dispatch(dataList());
    }
  }, [dispatch, listOfData.length]);
  const filteredList = listOfData.filter((item) => item.name === name);
  return (
    <div>
      {filteredList.map((character) => (
        <NavLink className={({ isActive }) => (isActive ? 'activeLink' : 'homeLink')} to="/" type="button" key={character.name}>
          <h1 className="back-btn">
            &lt;
            <span className="details-header">{character.name}</span>
          </h1>
        </NavLink>
      ))}
      {
                filteredList.map((character) => (
                  <div className="detail-container" key={character.name}>
                    <img alt={character.name} src={character.imageUrl} />
                    <h4 className="details-tab colortab space">
                      Films:
                      <span className="tab-detail">{character.films.length}</span>
                    </h4>
                    <h4 className="details-tab">
                      Allies:
                      <span className="tab-detail">{character.allies.length}</span>
                    </h4>
                    <h4 className="details-tab colortab">
                      Enemies:
                      <span className="tab-detail">{character.enemies.length}</span>
                    </h4>
                    <h4 className="details-tab">
                      Park Atractions:
                      <span className="tab-detail">{character.parkAttractions.length}</span>
                    </h4>
                    <h4 className="details-tab colortab">
                      TV Shows:
                      <span className="tab-detail">{character.tvShows.length}</span>
                    </h4>
                    <h4 className="details-tab bottomspace">
                      Video Games:
                      <span className="tab-detail">{character.videoGames.length}</span>
                    </h4>
                  </div>
                ))
            }
    </div>
  );
}

export default Details;
