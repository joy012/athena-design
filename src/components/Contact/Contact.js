import React from 'react';
import './Contact.css';
import image from './images/image1.png';

const Contact = () => {
    return (
        <section className='bg-img pt-5'>
            <div className='container py-3'>
                <div className='row flex-md-row flex-column-reverse align-items-center justify-content-center'>
                    <div className='col-md-5 py-5 py-md-0'>
                        <img
                            src={image}
                            className='w-100 d-block mx-auto'
                            alt=''
                        />
                    </div>
                    <div className='col-md-6 mx-auto'>
                        <h2 className='font-weight-normal title'>
                            Stay Running & Project
                        </h2>
                        <p className='text-muted'>
                            It is a long established fact that a reader will be
                            distracted by the readable content of a page when
                            looking at its layout. The point of using Lorem
                            Ipsum is that it has a more-or-less normal
                            distribution of letter.
                        </p>
                        <button className='gradient-btn d-block mx-auto mx-md-0 px-3 py-2'>
                            Contact us
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
