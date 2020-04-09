import React from 'react';
import whyUsPoster from "../../assets/images/managers-why.jpg";
import whyUs from "../../assets/video/why-us.mp4";
import gManagerImg from '../../assets/staff/gManager.jpg';
import secretaryImg from '../../assets/staff/secretary.jpg';
import organizerImg from '../../assets/staff/organizer.jpg';
import CEOImg from '../../assets/staff/CEO.jpg';
import accountantImg from '../../assets/staff/accountantImg.jpg';

const STAFF = {
    gManager: {
        position: 'General Manager / Adviser',
        name: 'Nurudeen Kasim',
        info: 'He is the general manger of the company and also adviser at the same time. He manages the affairs of the company in and out. The role of Kasim is to closely watch and  tap the young individual talented athletes, he is also the company area scout and plays a role in the management team as well.',
        photo: gManagerImg
    },
    secretary: {
        position: 'Secretary',
        name: 'Anastasiia Korshunova',
        info: 'Our secretary Anastasiia Korshunova is a diligent hard worker,. She plays a role to organise and undertake a variety of administrative task. She also jot down expenses and plan of then company such as travel costs, event details, and up keep fees ect...',
        photo: secretaryImg
    },
    organizer: {
        position: 'Organizer',
        name: 'Allen Mixon',
        info: 'Our Organizer Mr Allen carry out the administrative task associated with running of the agency. alongside the day-to- day responsibilities.Our organizer Mr OTU coordinate with the general manager Mr Nurudeen Kasim in the arrangements of day - day activities and company travel plans in accordance of our clients',
        photo: organizerImg
    },
    CEO: {
        position: 'CEO',
        name: 'Allen Mixon',
        info: 'Our CEO Mr Hazo OTU.  he is responsible for making major corporate decisions, managing the overall operations and resources of a company, acting as the main point of communication between the board of directors.',
        photo: CEOImg
    },
    accountant: {
        position: 'Accountant',
        name: 'Greta Adjei',
        info: '',
        photo: accountantImg
    },


};

const StaffMiddle = () => {
    let windowWidth = window.matchMedia("(max-width: 600px)");
    if(windowWidth.matches){
        return (
            <div className='HomeMiddle'>
                <section className='info__header container'>
                    <h2 className='info__main-title'>Our lovely staff members</h2>
                </section>
                <section className='info__section who container'>
                    <div className='info__item'>
                        <h2 className='info__title'>CEO</h2>
                        <p className='info__text info__text-left'>
                            <b>Allen</b> is an International, standard and global private sports agency; providing soccer trials,international camps for aspiring footballers ranging from age 15 and above. HNBM manages talents who needs our assistance in various ways.our agency with the  coordination of our partners and other soccer agents try to fix our clients into clubs for trials or for signing on when necessary.   Currently we made some transfers to the golf countries under our management  and looking forward to other parts of the world for trials or signings. We're always ready to embrace client's  that are interested in cooperating with our sports agency concerning the above mentioned details.
                        </p>
                    </div>
                    <div className='info__item'>
                        <div className='info__pic ceo__pic'>

                        </div>
                    </div>
                </section>
                <section className='info__section info__what container'>
                    <div className='info__item'>
                        <h2 className='info__title'>Program Organizer</h2>
                        <div className='info__text info__text-right'>
                            <ol>
                                <li>We negotiate a professional contract or trial for our (players) clients.</li>
                                <li>We closely follow each of our players to know their condition in club</li>
                                <li>Our agency also finds clubs that allow our players or clients to evolve.</li>
                                <li>We establish a career plan for our clients</li>
                                <li>.We also suggest an investment plans to our clients to ensure that our player or client is comfortable after their soccer career.</li>
                            </ol>
                        </div>
                    </div>
                    <div className='info__item'>
                        <div className='info__pic organizer__pic'>

                        </div>
                    </div>
                </section>
                <section className='info__section info__why container'>
                    <div className='info__item'>
                        <h2 className='info__title'>Accountant</h2>
                        <p className='info__text info__text-left'>
                            We establish relationships based on professionalism, transparency and trust: values that define our philosophy and the way we work. Our code of ethics is more than a declaration of intent; it shows us the way to follow and has allow us to obtain recognition and results endorsement. We know that trust is something vague, built and maintained through fidelity. The professional relationship we have with our athletes goes beyond merely providing services. We feel the defeats, the successes and the tension  of athletes like ours and we learn from the challenges we go through successively.
                        </p>
                    </div>
                    <div className='info__item'>
                        <div className='info__pic account__pic'>
                            <video width="400" autoPlay loop height="250" poster={whyUsPoster}>
                                <source src={whyUs} type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'/>

                            </video>
                        </div>
                    </div>
                </section>
                <section className='info__section info__staff container'>
                    <div className='info__item'>
                        <h2 className='info__title'>Secretary</h2>
                        <p className='info__text info__text-right'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium autem, cumque debitis doloribus eaque eius enim eos in ipsam itaque labore laborum magni neque nihil nulla odit officia perspiciatis provident quasi quidem quisquam, tempora temporibus tenetur ut veritatis! Ab culpa ea, iste magni necessitatibus sequi?</p>
                    </div>
                    <div className='info__item'>
                        <div className='info__pic secretary__pic'>

                        </div>
                    </div>
                </section>
                <section className='info__section info__staff container'>
                    <div className='info__item'>
                        <div className='info__pic secretary__pic'>

                        </div>
                    </div>
                    <div className='info__item'>
                        <h2 className='info__title'>Secretary</h2>
                        <p className='info__text info__text-left'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium autem, cumque debitis doloribus eaque eius enim eos in ipsam itaque labore laborum magni neque nihil nulla odit officia perspiciatis provident quasi quidem quisquam, tempora temporibus tenetur ut veritatis! Ab culpa ea, iste magni necessitatibus sequi?</p>
                    </div>
                </section>
            </div>
        );
    } else {
        return (
            <div className='HomeMiddle'>
                <section className='info__header container'>
                    <h2 className='info__main-title'>Our lovely staff members</h2>
                </section>
                <section className='info__section who container'>
                    <div className='info__item'>
                        <h2 className='info__title'>CEO</h2>
                        <p className='info__text info__text-left'>
                            <b>HNBM SPORTS AGENCY</b> is an International, standard and global private sports agency; providing soccer trials,international camps for aspiring footballers ranging from age 15 and above. HNBM manages talents who needs our assistance in various ways.our agency with the  coordination of our partners and other soccer agents try to fix our clients into clubs for trials or for signing on when necessary.   Currently we made some transfers to the golf countries under our management  and looking forward to other parts of the world for trials or signings. We're always ready to embrace client's  that are interested in cooperating with our sports agency concerning the above mentioned details.
                        </p>
                    </div>
                    <div className='info__item'>
                        <div className='info__pic who__pic'>

                        </div>
                    </div>
                </section>
                <section className='info__section info__what container'>
                    <div className='info__item'>
                        <div className='info__pic what__pic'>

                        </div>
                    </div>
                    <div className='info__item'>
                        <h2 className='info__title'>General Manager / Advisor</h2>
                        <div className='info__text info__text-right'>
                            <ol>
                                <li>We negotiate a professional contract or trial for our (players) clients.</li>
                                <li>We closely follow each of our players to know their condition in club</li>
                                <li>Our agency also finds clubs that allow our players or clients to evolve.</li>
                                <li>We establish a career plan for our clients</li>
                                <li>.We also suggest an investment plans to our clients to ensure that our player or client is comfortable after their soccer career.</li>
                            </ol>
                        </div>
                    </div>
                </section>
                <section className='info__section info__why container'>
                    <div className='info__item'>
                        <h2 className='info__title'>Program Organizer</h2>
                        <p className='info__text info__text-left'>
                            We establish relationships based on professionalism, transparency and trust: values that define our philosophy and the way we work. Our code of ethics is more than a declaration of intent; it shows us the way to follow and has allow us to obtain recognition and results endorsement. We know that trust is something vague, built and maintained through fidelity. The professional relationship we have with our athletes goes beyond merely providing services. We feel the defeats, the successes and the tension  of athletes like ours and we learn from the challenges we go through successively.
                        </p>
                    </div>
                    <div className='info__item'>
                        <div className='info__pic why__pic'>
                            <video width="400" autoPlay loop height="250" poster={whyUsPoster}>
                                <source src={whyUs} type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'/>

                            </video>
                        </div>
                    </div>
                </section>
                <section className='info__section info__staff container'>
                    <div className='info__item'>
                        <div className='info__pic staff__pic'>

                        </div>
                    </div>
                    <div className='info__item'>
                        <h2 className='info__title'>Secretary</h2>
                        <p className='info__text info__text-right'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium autem, cumque debitis doloribus eaque eius enim eos in ipsam itaque labore laborum magni neque nihil nulla odit officia perspiciatis provident quasi quidem quisquam, tempora temporibus tenetur ut veritatis! Ab culpa ea, iste magni necessitatibus sequi?</p>
                    </div>
                </section>
                <section className='info__section info__staff container'>
                    <div className='info__item'>
                        <h2 className='info__title'>Accountant</h2>
                        <p className='info__text info__text-right'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium autem, cumque debitis doloribus eaque eius enim eos in ipsam itaque labore laborum magni neque nihil nulla odit officia perspiciatis provident quasi quidem quisquam, tempora temporibus tenetur ut veritatis! Ab culpa ea, iste magni necessitatibus sequi?</p>
                    </div>
                    <div className='info__item'>
                        <div className='info__pic staff__pic'>

                        </div>
                    </div>
                </section>
            </div>
        );
    }
};


export default StaffMiddle;
