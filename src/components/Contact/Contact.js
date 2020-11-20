import React from 'react';
import './Contact.css';
import image from './images/image1.png';

const Contact = () => {
    return (
        <section class='bg-img'>
           <div className="container py-3">
                <div class="row flex-md-row flex-column-reverse align-items-center justify-content-center">
                    <div class="col-md-5 py-5 py-md-0">
                        <img src={image} className='w-100 d-block mx-auto' alt="" />
                    </div>
                    <div class="col-md-6 mx-auto">
                        <h2 class='font-weight-normal'>STAY RUNNING & Project</h2>
                        <p class='text-muted'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letter.</p>
                        <button className='gradient-btn d-block mx-auto mx-md-0 px-3 py-2'>Contact us</button>
                    </div>
                </div>
           </div>
        </section>
    );
};

export default Contact;