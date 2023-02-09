/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { dataList } from '../redux/home/home';
import Tab from './Tab';
import './Home.css';

function Home() {
  const listOfData = useSelector((state) => state.home);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!listOfData.length) {
      dispatch(dataList());
    }
  }, [dispatch, listOfData.length]);
  const [search, setSearch] = useState('');
  const searchCharacter = (event) => setSearch(event.target.value);
  let searchResult = [];
  if (!search) {
    searchResult = listOfData;
  } else {
    searchResult = listOfData.filter((item) => item.name.toLowerCase() === search.toLowerCase());
  }
  return (
    <div className="main-container">
      <div className="header">
        <h1 className="home-title">Disney Characters</h1>
        <div className="bar-container">
          <input type="text" className="search-bar" placeholder="Search" onChange={searchCharacter} />
        </div>
      </div>
      <div className="columns">
        <div className="row">
          {
                       searchResult.map((item) => (
                         <NavLink
                           to={`details/${item.name}`}
                           key={item._id}
                         >
                           <Tab
                             name={item.name}
                             films={item.films.length}
                             imageUrl={item.imageUrl}
                             _id={item._id}
                             index={item.index}
                             key={item.name}
                           />
                         </NavLink>
                       ))
                    }
        </div>
      </div>
    </div>
  );
}

export default Home;
