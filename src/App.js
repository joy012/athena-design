import React from 'react';
import Achievements from './components/Achievements/Achievements';
import Contact from './components/Contact/Contact';
import Email from './components/Email/Email';
import Footer from './components/Footer/Footer';
import Plans from './components/Plans/Plans';
import Services from './components/Services/Services';
import Main from './components/Main/Main';

const App = () => {
    return (
        <>
            <Main />
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
