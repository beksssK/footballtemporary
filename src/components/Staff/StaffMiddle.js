import React from 'react';
import gManagerImg from '../../assets/staff/gManager.jpg';
import organizerImg from '../../assets/staff/organizer2.jpg';
import CEOImg from '../../assets/staff/CEO.jpg';
import partnerImg from '../../assets/staff/partner2.jpg';

import "./Staff.css";

const STAFF = {
    gManager: {
        position: 'General Manager',
        name: 'Anastasiia Korshunova',
        info: 'Our general manger Anastasiia Korshunova manages the external and internal affairs of the company. She also plays another role as the company\'s adviser. She manages the affairs of the company, she is a member of the board of directors as well',
        photo: gManagerImg
    },
    organizer: {
        position: 'Organizer',
        name: 'Greta Okunor',
        info: 'Our organizer Greta Okunor carries out the administrative task associated with running of the agency. alongside the day-to- day responsibilities.Our organizer Greta Okunor coordinate with our general manager Anastasia in the arrangements of day - day activities and company travel plans in accordance of our clients',
        photo: organizerImg
    },
    CEO: {
        position: 'CEO',
        name: 'Hazo Otu',
        info: 'Our CEO Mr Hazo Otu.  he is responsible for making major corporate decisions, managing the overall operations and resources of the company, acting as the main point of communication between the board of directors.',
        photo: CEOImg
    },
    partner: {
        position: 'Partner',
        name: '',
        info: 'He is one of the company\'s partner, he sometimes represent our company in the negotiations of contract of our clients in soccer clubs. He also cooperate with some top scouting team enabling us to identify and offer top talent for specific player positions required by the soccer clubs.',
        photo: partnerImg
    },
};

const StaffMiddle = () => {
    let windowWidth = window.matchMedia("(max-width: 600px)");
    if(windowWidth.matches){
        return (
            <div className='StaffMiddle'>
                <section className='info__header container'>
                    <h2 className='info__main-title'>Our lovely staff members</h2>
                </section>
                <section className='info__section staff__info__section who container'>
                    <div className='info__item'>
                        <h2 className='info__title staff__title'>{STAFF.CEO.name}</h2>
                        <h4 className='text-center text-info staff__position'>{STAFF.CEO.position}</h4>
                        <p className='info__text info__text-left'>{STAFF.CEO.info}</p>
                    </div>
                    <div className='info__item'>
                        <div className='info__pic ceo__pic' style={{backgroundImage: `url(${STAFF.CEO.photo})`}}/>
                    </div>
                </section>
                <section className='info__section staff__info__section info__what container'>
                    <div className='info__item'>
                        <h2 className='info__title staff__title'>{STAFF.gManager.name}</h2>
                        <h4 className='text-center text-info staff__position'>{STAFF.gManager.position}</h4>
                        <p className='info__text info__text-right'>{STAFF.gManager.info}</p>
                    </div>
                    <div className='info__item'>
                        <div className='info__pic gManager__pic' style={{backgroundImage: `url(${STAFF.gManager.photo})`}}/>
                    </div>
                </section>
                <section className='info__section staff__info__section info__why container'>
                    <div className='info__item'>
                        <h2 className='info__title staff__title'>{STAFF.organizer.name}</h2>
                        <h4 className='text-center text-info staff__position'>{STAFF.organizer.position}</h4>
                        <p className='info__text info__text-left'>{STAFF.organizer.info}</p>
                    </div>
                    <div className='info__item'>
                        <div className='info__pic organizer__pic' style={{backgroundImage: `url(${STAFF.organizer.photo})`}}/>
                    </div>
                </section>
                <section className='info__section staff__info__section info__staff container'>
                    <div className='info__item'>
                        <h2 className='info__title staff__title'>{STAFF.partner.name}</h2>
                        <h4 className='text-center text-info staff__position'>{STAFF.partner.position}</h4>
                        <p className='info__text info__text-left'>{STAFF.partner.info}</p>
                    </div>
                    <div className='info__item'>
                        <div className='info__pic partner__pic' style={{backgroundImage: `url(${STAFF.partner.photo})`}}/>
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
                <section className='info__section staff__info__section who container'>
                    <div className='info__item'>
                        <h2 className='info__title staff__title'>{STAFF.CEO.name}</h2>
                        <h4 className='text-center text-info staff__position'>{STAFF.CEO.position}</h4>
                        <p className='info__text info__text-left'>{STAFF.CEO.info}</p>
                    </div>
                    <div className='info__item'>
                        <div className='info__pic ceo__pic' style={{backgroundImage: `url(${STAFF.CEO.photo})`}}/>
                    </div>
                </section>
                <section className='info__section staff__info__section info__what container'>
                    <div className='info__item'>
                        <div className='info__pic gManager__pic' style={{backgroundImage: `url(${STAFF.gManager.photo})`}}/>
                    </div>
                    <div className='info__item'>
                        <h2 className='info__title staff__title'>{STAFF.gManager.name}</h2>
                        <h4 className='text-center text-info staff__position'>{STAFF.gManager.position}</h4>
                        <p className='info__text info__text-right'>{STAFF.gManager.info}</p>
                    </div>
                </section>
                <section className='info__section staff__info__section info__why container'>
                    <div className='info__item'>
                        <h2 className='info__title staff__title'>{STAFF.organizer.name}</h2>
                        <h4 className='text-center text-info staff__position'>{STAFF.organizer.position}</h4>
                        <p className='info__text info__text-left'>{STAFF.organizer.info}</p>
                    </div>
                    <div className='info__item'>
                        <div className='info__pic organizer__pic' style={{backgroundImage: `url(${STAFF.organizer.photo})`}}/>
                    </div>
                </section>
                <section className='info__section staff__info__section info__staff container'>
                    <div className='info__item'>
                        <div className='info__pic partner__pic' style={{backgroundImage: `url(${STAFF.partner.photo})`}}/>
                    </div>
                    <div className='info__item'>
                        <h2 className='info__title staff__title'>{STAFF.partner.name}</h2>
                        <h4 className='text-center text-info staff__position'>{STAFF.partner.position}</h4>
                        <p className='info__text info__text-right'>{STAFF.partner.info}</p>
                    </div>
                </section>
            </div>
        );
    }
};


export default StaffMiddle;
