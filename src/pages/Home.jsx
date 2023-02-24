import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Link to="/quiz">Commencer le quiz</Link>
        </div>
    );
};

export default Home;