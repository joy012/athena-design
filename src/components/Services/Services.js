import React from 'react';
import './Services.css';
import serviceImg1 from '../../Images/Group 65@2x.png';
import serviceImg2 from '../../Images/Group 66@2x.png';
import serviceImg3 from '../../Images/Group 69@2x.png';
import serviceImg4 from '../../Images/Group 72@2x.png';

const Services = () => {
    return (
        <section className='container text-center pt-5 mb-5' id='services'>
            <div className='mb-5'>
                <h2 className='title'>What we do</h2>
                <p className='text-muted'>
                    <small>
                        Our main focus is to make the User Experience very{' '}
                        <br />
                        simple and easy. Simplicity is our Strength.
                    </small>
                </p>
            </div>
            <div className='row'>
                <div className='col-lg-3 col-sm-6 single-service'>
                    <img className='mb-3' src={serviceImg1} alt='' />
                    <h5>Experience Design</h5>
                    <p className='text-muted'>
                        <small>
                            The point of using Lorem Ipsum is that it has a
                            more-or less normal.
                        </small>
                    </p>
                </div>
                <div className='col-lg-3 col-sm-6 single-service'>
                    <img className='mb-3' src={serviceImg2} alt='' />
                    <h5>Interface Design</h5>
                    <p className='text-muted'>
                        <small>
                            The point of using Lorem Ipsum is that it has a
                            more-or less normal.
                        </small>
                    </p>
                </div>
                <div className='col-lg-3 col-sm-6 single-service'>
                    <img className='mb-3' src={serviceImg3} alt='' />
                    <h5>Prototyping</h5>
                    <p className='text-muted'>
                        <small>
                            The point of using Lorem Ipsum is that it has a
                            more-or less normal.
                        </small>
                    </p>
                </div>
                <div className='col-lg-3 col-sm-6 single-service'>
                    <img className='mb-3' src={serviceImg4} alt='' />
                    <h5>Illustration</h5>
                    <p className='text-muted'>
                        <small>
                            The point of using Lorem Ipsum is that it has a
                            more-orless normal.
                        </small>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Services;
