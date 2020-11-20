import React from 'react';
import './Email.css'

const Email = () => {
    return (
        <section className='text-center my-5 '>
            <h1> Get your design right, right now</h1>
            <h5 className='text-muted mt-4'>Be the first know our latest offers and updates</h5>
           
            <div className = "row p-4 mt-4 mx-md-5">
                <div className = 'newsletter col-md-6 offset-md-3 d-flex justify-content-between'>
                    <input type="email"  placeholder="Enter your email address"/>
                    <button className='btn newsletter-btn'> Get Started </button>
                </div>
            </div>
            
        </section>
    );
};

export default Email;