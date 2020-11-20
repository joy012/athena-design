import React from 'react';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import './Main.css';

const Main = () => {
    return (
        <main className='header-section'>
            <div className='container mb-5'>
                <Menu />
                <Header />
            </div>

        </main>
    );
};

export default Main;
