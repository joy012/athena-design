import React from 'react';
import Achievements from './components/Achievements/Achievements';
import Contact from './components/Contact/Contact';
import Email from './components/Email/Email';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Plans from './components/Plans/Plans';
import Services from './components/Services/Services';

const App = () => {
    return (
        <>
            <Menu />
            <Header />
            <Services />
            <Contact />
            <Achievements />
            <Plans />
            <Email />
            <Footer />
        </>
    );
};

export default App;
