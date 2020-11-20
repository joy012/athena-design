import React from 'react';
import './Achievements.css';
import logo1 from './icon/client.png';
import logo2 from './icon/rocket.png';
import logo3 from './icon/happy.png';
import logo4 from './icon/trophy.png';

const achievements = [
    {
        img: logo3,
        textLarge: '700+',
        textSmall: 'Happy Clients'
    },
    {
        img: logo4,
        textLarge: '140+',
        textSmall: 'Projects Completed'
    },
    {
        img: logo1,
        textLarge: '25+',
        textSmall: 'Crazy Minds'
    },
    {
        img: logo2,
        textLarge: '75+',
        textSmall: 'Running Projects'
    },
]

const Achievements = () => {
    return (
        <section class='achievement py-5'>
            <div class="container py-5">
                <div class="row align-items-center justify-content-center">
                    <div class="col-md-5">
                        <h2>Our Achievements</h2>
                        <p class='text-muted'>It is a long established fact that a reader will be distracted by
                        the readable content of a page when looking at its layout. The
                        point of using Lorem Ipsum is that it has a more-or-less normal
                        distribution of letter.
                        </p>
                    </div>
                    <div class="col-md-7">
                        <div class="row">
                            {
                                achievements.map(achievement =>
                                    <div class="col-md-5 p-3 my-2 mx-md-2 mx-5 achievement-card">
                                        <div class="row align-items-center justify-content-center">
                                            <div class="col-6">
                                                <img class='img-fluid d-block ml-auto' src={achievement.img} alt="" />
                                            </div>
                                            <div class='achievement-text text-muted col-6'>
                                                <h4>{achievement.textLarge}</h4>
                                                <small>{achievement.textSmall}</small>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Achievements;