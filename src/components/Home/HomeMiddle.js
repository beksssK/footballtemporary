import React from 'react';
import './HomeMiddle.css';
import MyCarousel from "../UI/MyCarousel/MyCarousel";

const HomeMiddle = () => {
    let windowWidth = window.matchMedia("(max-width: 600px)");
    const items = [
        {
            src: windowWidth.matches ? require('../../assets/staff/CEO11.jpg') : require('../../assets/staff/CEO11.jpg') ,
            altText: 'Our CEO',
            caption: 'our CEO'
        },
        {
            src: require('../../assets/staff/organizer.jpg'),
            altText: 'Organizer',
            caption: 'our organizer'
        },
        {
            src: windowWidth.matches ? require('../../assets/staff/secretary.jpg') : require('../../assets/staff/secretary2.jpg'),
            altText: 'Secretary',
            caption: 'our secretary'
        },
        {
            src: windowWidth.matches ? require('../../assets/staff/secretary.jpg') : require('../../assets/staff/secretary2.jpg'),
            altText: 'General Manager',
            caption: 'general manager'
        },
        {
            src: require('../../assets/staff/accountantImg.jpg'),
            altText: 'Accountant',
            caption: 'our accountant'
        },
        {
            src: require('../../assets/staff/lawyer-slide.jpg'),
            altText: 'Lawyer',
            caption: 'Corporate Lawyer'
        }
    ];
    if(windowWidth.matches){
        return (
            <div className='HomeMiddle'>
                <section className='info__header container'>
                    <h2 className='info__main-title'>HNBM SPORTS MANAGEMENT AND COMPANY LTD</h2>
                </section>
                <section className='info__section who container'>
                    <div className='info__item'>
                        <h2 className='info__title'>Who are we</h2>
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
                        <h2 className='info__title'>What do we do</h2>
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
                        <div className='info__pic what__pic'>

                        </div>
                    </div>
                </section>
                <section className='info__section info__why container'>
                    <div className='info__item'>
                        <h2 className='info__title'>Why do they choose us?</h2>
                        <p className='info__text info__text-left'>
                            We establish relationships based on professionalism, transparency and trust: values that define our philosophy and the way we work. Our code of ethics is more than a declaration of intent; it shows us the way to follow and has allow us to obtain recognition and results endorsement. We know that trust is something vague, built and maintained through fidelity. The professional relationship we have with our athletes goes beyond merely providing services. We feel the defeats, the successes and the tension  of athletes like ours and we learn from the challenges we go through successively.
                        </p>
                    </div>
                    <div className='info__item'>
                        <div className='info__pic why__pic'>

                        </div>
                    </div>
                </section>
                <section className='info__section info__staff container'>
                    <div className='info__item'>
                        <h2 className='info__title'>Our staff</h2>
                        <p className='info__text info__text-right'>Our Staffs are very diligent and capable of managing the affairs of the  company.each one of them plays a major role as expected of them in terms of cooperation of our clients and partners.is quite an experience working with our staffs along side our board of directors.</p>
                    </div>
                    <div className='info__item'>
                        <div className='info__pic staff__pic'>
                            <MyCarousel items={items}/>
                        </div>
                    </div>
                </section>
            </div>
        );
    } else {
        return (
            <div className='HomeMiddle'>
                <section className='info__header container'>
                    <h2 className='info__main-title'>HNBM SPORTS MANAGEMENT AND COMPANY LTD</h2>
                </section>
                <section className='info__section who container'>
                    <div className='info__item'>
                        <h2 className='info__title'>Who are we</h2>
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
                        <h2 className='info__title'>What do we do</h2>
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
                        <h2 className='info__title'>Why do they choose us?</h2>
                        <p className='info__text info__text-left'>
                            We establish relationships based on professionalism, transparency and trust: values that define our philosophy and the way we work. Our code of ethics is more than a declaration of intent; it shows us the way to follow and has allow us to obtain recognition and results endorsement. We know that trust is something vague, built and maintained through fidelity. The professional relationship we have with our athletes goes beyond merely providing services. We feel the defeats, the successes and the tension  of athletes like ours and we learn from the challenges we go through successively.
                        </p>
                    </div>
                    <div className='info__item'>
                        <div className='info__pic why__pic'>

                        </div>
                    </div>
                </section>
                <section className='info__section info__staff container'>
                    <div className='info__item info__staff_item'>
                        <div className='info__pic staff__pic'>
                            <MyCarousel items={items}/>
                        </div>
                    </div>
                    <div className='info__item'>
                        <h2 className='info__title'>Our staff</h2>
                        <p className='info__text info__text-right'>Our Staffs are very diligent and capable of managing the affairs of the  company.each one of them plays a major role as expected of them in terms of cooperation of our clients and partners.is quite an experience working with our staffs along side our board of directors.</p>
                    </div>
                </section>
            </div>
        );
    }

};

export default HomeMiddle;
