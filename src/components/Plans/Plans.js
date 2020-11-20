import React from 'react';
import './Plans.css'

const Plans = () => {
    const visibleBtn= (id)=>{
        document.getElementById(id).style.visibility='visible'
    } 
    const hiddenBtn =(id)=>{
        document.getElementById(id).style.visibility='hidden'
    }

    return (
        <section className="text-center plans-bg">
           <h1 className='title'>Choose Your Dedicated Team</h1>
           <div className="container mt-5">
               <div className="row ">
                   <div className="col-md-4 ">
                       <div className='px-3'>
                           <div className="plans-cards p-5" onMouseOver={()=>visibleBtn('plan1Btn')} onMouseLeave={()=>hiddenBtn('plan1Btn')}>
                            <h1>$199</h1>  
                            <p>For Basic</p>
                            <table width="100%">
                                    <tr>  <td> <div className='px-5'><hr/></div></td></tr>   
                                </table>
                                <p>Homepage</p>
                                <p>No Inner Page</p>
                                <p>Asset file</p>
                                <p>Source file</p>
                                <p>Free Stock Photos</p>
                                <p>10 Days Free Support</p>
                                <p>24/7 Support</p>
                                <button className='btn plans-btn' id='plan1Btn'> Order Now </button>
                           </div>
                       </div>
                   </div>
                   <div className="col-md-4" onMouseOver={()=>visibleBtn('plan2Btn')} onMouseLeave={()=>hiddenBtn('plan2Btn')}>
                        <div className='px-3'>
                           <div className="plans-cards p-5">
                                <h1>$399</h1>  
                                <p>For Preferred</p>
                                <table width="100%">
                                    <tr>  <td> <div className='px-5'><hr/></div></td></tr>   
                                </table>
                                <p>Homepage</p>
                                <p>4 Inner Pages</p>
                                <p>Asset file</p>
                                <p>Source file</p>
                                <p>Free Stock Photos</p>
                                <p>20 Days Free Support</p>
                                <p>24/7 Support</p>
                                <button className='btn plans-btn' id='plan2Btn'> Order Now </button>
                           </div>
                       </div>
                   </div>

                   <div className="col-md-4" onMouseOver={()=>visibleBtn('plan3Btn')} onMouseLeave={()=>hiddenBtn('plan3Btn')}>
                        <div className='px-3'>
                           <div className="plans-cards p-5">
                                <h1>$599</h1>  
                                <p>For Elite</p>
                                <table width="100%">
                                    <tr>  <td> <div className='px-5'><hr/></div></td></tr>   
                                </table>
                                <p>Homepage</p>
                                <p>8 Inner Pages</p>
                                <p>Asset file</p>
                                <p>Source file</p>
                                <p>Free Stock Photos</p>
                                <p>30 Days Free Support</p>
                                <p>24/7 Support</p>
                                <button className='btn plans-btn'id='plan3Btn'> Order Now </button>
                           </div>
                       </div>
                   </div>
               </div>
           </div>

        </section>
    );
};

export default Plans;