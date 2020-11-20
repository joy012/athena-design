import React from 'react';
import './Header.css';
import headerImg from '../../Images/16 [Converted]@2x.png';

const Header = () => {
    return (
        <header className='row'>
            <div className='col-lg-6 col-md-5'>
                <h1 className='title display-3 mb-5'>
                    Florence <br /> Agency
                </h1>
                <p className='text-muted mb-4'>
                    <small>
                        Lorem Ipsum has been the industry's standard dummy text
                        ever since the 1500s, when an unknown printer took a
                        galley of type and scrambled it to make a type specimen
                        book.
                    </small>
                </p>
                <button className='gradient-btn'>See Pricing</button>
            </div>
            <div className='col-lg-6 col-md-7'>
                <img className='img-fluid' src={headerImg} alt='' />
            </div>
        </header>
    );
};

export default Header;
