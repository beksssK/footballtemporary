import React from 'react';
import gManagerImg from '../../assets/staff/gManager.jpg';
import secretaryImg from '../../assets/staff/secretary.jpg';
import organizerImg from '../../assets/staff/organizer.jpg';
import CEOImg from '../../assets/staff/CEO.jpg';
import accountantImg from '../../assets/staff/accountantImg.jpg';
import partnerImg from '../../assets/staff/parnter.jpg';

const STAFF = {
    gManager: {
        position: 'General Manager / Adviser',
        name: 'Nurudeen Kasim',
        info: 'Our general manger/adviser. Mr Nurudeen Kasim manages the external and internal affairs of the company.He also plays another role as the company\'s adviser. He manages the affairs of the company,he is a member of the board of directors as well',
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
        info: 'Our Organizer Mr Allen carry out the administrative task associated with running of the agency. alongside the day-to- day responsibilities.Our organizer Mr Allen coordinate with our general manager Mr Nurudeen Kasim in the arrangements of day - day activities and company travel plans in accordance of our clients',
        photo: organizerImg
    },
    CEO: {
        position: 'CEO',
        name: 'Allen Mixon',
        info: 'Our CEO Mr Hazo OTU.  he is responsible for making major corporate decisions, managing the overall operations and resources of the company, acting as the main point of communication between the board of directors.',
        photo: CEOImg
    },
    accountant: {
        position: 'Accountant',
        name: 'Greta Okunor',
        info: 'Our accountant Greta Okunor prepares financial information to Management, she prepare asset, liability and capital account entries. She also maintains customer confidence and protects operations by keeping financial information confidential.she is honest and a hard worker in all duties of the accounting sector.',
        photo: accountantImg
    },
    partner: {
        position: 'Partner',
        name: 'Josip Zbiljski',
        info: 'He is our chiefs-scout and partner Josip Zbilijski assets our player before placement on to get various clubs ',
        photo: partnerImg
    }

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
                        <h2 className='info__title'>{STAFF.CEO.position}</h2>
                        <p className='info__text info__text-left'>{STAFF.CEO.info}</p>
                    </div>
                    <div className='info__item'>
                        <div className='info__pic ceo__pic' style={{backgroundImage: `url(${STAFF.CEO.photo})`}}/>
                    </div>
                </section>
                <section className='info__section info__what container'>
                    <div className='info__item'>
                        <h2 className='info__title'>{STAFF.gManager.position}</h2>
                        <p className='info__text info__text-right'>{STAFF.gManager.info}</p>
                    </div>
                    <div className='info__item'>
                        <div className='info__pic gManager__pic' style={{backgroundImage: `url(${STAFF.gManager.photo})`}}/>
                    </div>
                </section>
                <section className='info__section info__why container'>
                    <div className='info__item'>
                        <h2 className='info__title'>{STAFF.organizer.position}</h2>
                        <p className='info__text info__text-left'>{STAFF.organizer.info}</p>
                    </div>
                    <div className='info__item'>
                        <div className='info__pic organizer__pic' style={{backgroundImage: `url(${STAFF.organizer.photo})`}}/>
                    </div>
                </section>
                <section className='info__section info__staff container'>
                    <div className='info__item'>
                        <h2 className='info__title'>{STAFF.secretary.position}</h2>
                        <p className='info__text info__text-right'>{STAFF.secretary.info}</p>
                    </div>
                    <div className='info__item'>
                        <div className='info__pic secretary__pic' style={{backgroundImage: `url(${STAFF.secretary.photo})`}}/>
                    </div>
                </section>
                <section className='info__section info__staff container'>
                    <div className='info__item'>
                        <h2 className='info__title'>{STAFF.accountant.position}</h2>
                        <p className='info__text info__text-left'>{STAFF.accountant.info}</p>
                    </div>
                    <div className='info__item'>
                        <div className='info__pic accountant__pic' style={{backgroundImage: `url(${STAFF.accountant.photo})`}}>

                        </div>
                    </div>
                </section>
                <section className='info__section info__staff container'>
                    <div className='info__item'>
                        <h2 className='info__title'>{STAFF.partner.position}</h2>
                        <p className='info__text info__text-left'>{STAFF.partner.info}</p>
                    </div>
                    <div className='info__item'>
                        <div className='info__pic partner__pic' style={{backgroundImage: `url(${STAFF.partner.photo})`}}>

                        </div>
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
                        <h2 className='info__title'>{STAFF.CEO.position}</h2>
                        <p className='info__text info__text-left'>{STAFF.CEO.info}</p>
                    </div>
                    <div className='info__item'>
                        <div className='info__pic ceo__pic' style={{backgroundImage: `url(${STAFF.CEO.photo})`}}>

                        </div>
                    </div>
                </section>
                <section className='info__section info__what container'>
                    <div className='info__item'>
                        <div className='info__pic gManager__pic' style={{backgroundImage: `url(${STAFF.gManager.photo})`}}>

                        </div>
                    </div>
                    <div className='info__item'>
                        <h2 className='info__title'>{STAFF.gManager.position}</h2>
                        <p className='info__text info__text-right'>{STAFF.gManager.info}</p>
                    </div>
                </section>
                <section className='info__section info__why container'>
                    <div className='info__item'>
                        <h2 className='info__title'>{STAFF.organizer.position}</h2>
                        <p className='info__text info__text-left'>{STAFF.organizer.info}</p>
                    </div>
                    <div className='info__item'>
                        <div className='info__pic organizer__pic' style={{backgroundImage: `url(${STAFF.organizer.photo})`}}/>
                    </div>
                </section>
                <section className='info__section info__staff container'>
                    <div className='info__item'>
                        <div className='info__pic secretary__pic' style={{backgroundImage: `url(${STAFF.secretary.photo})`}}>

                        </div>
                    </div>
                    <div className='info__item'>
                        <h2 className='info__title'>{STAFF.secretary.position}</h2>
                        <p className='info__text info__text-right'>{STAFF.secretary.info}</p>
                    </div>
                </section>
                <section className='info__section info__staff container'>
                    <div className='info__item'>
                        <h2 className='info__title'>{STAFF.accountant.position}</h2>
                        <p className='info__text info__text-left'>{STAFF.accountant.info}</p>
                    </div>
                    <div className='info__item'>
                        <div className='info__pic accountant__pic' style={{backgroundImage: `url(${STAFF.accountant.photo})`}}>

                        </div>
                    </div>
                </section>
                <section className='info__section info__staff container'>
                    <div className='info__item'>
                        <div className='info__pic partner__pic' style={{backgroundImage: `url(${STAFF.partner.photo})`}}>

                        </div>
                    </div>
                    <div className='info__item'>
                        <h2 className='info__title'>{STAFF.partner.position}</h2>
                        <p className='info__text info__text-right'>{STAFF.partner.info}</p>
                    </div>
                </section>
            </div>
        );
    }
};


export default StaffMiddle;
