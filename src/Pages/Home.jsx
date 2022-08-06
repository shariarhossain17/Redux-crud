import React from 'react';
import '../Css/Home.css';
import ShowBook from '../Features/ShowBook';

const Home = () => {
    return (
        <div className='home'>
           <div className='content'>
           <ShowBook/>
           </div>
        </div>
    );
};

export default Home;