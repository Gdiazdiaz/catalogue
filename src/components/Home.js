import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { dataList } from './../redux/home/home';
import { NavLink } from 'react-router-dom';
import Tab from './Tab';
import './Home.css';

function Home(){
    const listOfData = useSelector((state) => state.home)
    const dispatch = useDispatch();

    useEffect(() => {
        if(!listOfData.length){
            dispatch(dataList());
        }
    }, []);
    return(
        <div className="main-container">
            <div className="header">
                <h1 className="home-title">Disney Characters</h1>
            </div>
            <div className="columns">
                <div className="row">
                    {
                       listOfData.map((item) => (
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