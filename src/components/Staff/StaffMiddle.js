import React from 'react';
import gManagerImg from '../../assets/staff/gManager.jpg';
import organizerImg from '../../assets/staff/organizer2.jpg';
import CEOImg from '../../assets/staff/CEO.jpg';
import partnerImg from '../../assets/staff/partner2.jpg';
import mainPartner from "../../assets/staff/mainPartner.jpeg"

import "./Staff.css";
import StaffCard from "./StaffCard";
import useWindowWidth from "../../hooks/useWindowWidth";

const STAFF = {
    ceo: {
        position: 'CEO',
        name: 'Hazo Otu',
        info: 'Our CEO Mr Hazo Otu.  he is responsible for making major corporate decisions, managing the overall operations and resources of the company, acting as the main point of communication between the board of directors.',
        photo: CEOImg
    },
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
    partner: {
        position: 'Partner',
        name: '',
        info: 'He is one of our company\'s partner who coordinates with our other partners to raise our soccer industry.',
        photo: partnerImg
    },
    mainPartner: {
        position: 'partner',
        name: 'Arsomersujev Aslanbek Grosny',
        info: 'Mr. Aslanbek is one of the company\'s main partner, he sometimes represent our agency in the negotiations of contract of our clients in soccer clubs. He also cooperate with some top scouting team also coaches to enabling us  identify and offer top talent for specific player positions required by  soccer clubs',
        photo: mainPartner
    }
};

const StaffMiddle = () => {
    const isWindowSmall = useWindowWidth();
    return (
        <div className='HomeMiddle'>
            <section className='info__header container'>
                <h2 className='info__main-title'>Our lovely staff members</h2>
            </section>
            {Object.keys(STAFF).map((member, index) => (
              <StaffCard key={member} leftSided={index % 2 ? true : isWindowSmall } name={STAFF[member].name} photoLink={STAFF[member].photo} position={STAFF[member].position} info={STAFF[member].info} staffClass={member}/>
            ))}
        </div>
    );
};


export default StaffMiddle;
