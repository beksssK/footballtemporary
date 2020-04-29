import React from 'react';
import gManagerImg from '../../assets/staff/generalManager1.jpg';
import secretaryImg from '../../assets/staff/secretary3.jpg';
import organizerImg from '../../assets/staff/organizer2.jpg';
import CEOImg from '../../assets/staff/CEO3.jpg';
import accountantImg from '../../assets/staff/accountant2.jpg';
import partnerImg from '../../assets/staff/partner2.jpg';
import webDevImg from '../../assets/staff/webDev.jpg';
import lawyerImg from '../../assets/staff/lawyer.jpg'
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
        name: 'Allen Okunur',
        info: 'Our Organizer Mr Allen carry out the administrative task associated with running of the agency. alongside the day-to- day responsibilities.Our organizer Mr Allen coordinate with our general manager Mr Nurudeen Kasim in the arrangements of day - day activities and company travel plans in accordance of our clients',
        photo: organizerImg
    },
    CEO: {
        position: 'CEO',
        name: 'Hazo Otu',
        info: 'Our CEO Mr Hazo Otu.  he is responsible for making major corporate decisions, managing the overall operations and resources of the company, acting as the main point of communication between the board of directors.',
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
        info: 'My Josip is one of our company\'s partner, he sometimes represent our company in the negotiations of contract of our clients in soccer clubs. He also cooperate with some top scouting team enabling us to identify and offer top talent for specific player positions required by the soccer clubs.',
        photo: partnerImg
    },
    webDev: {
        position: 'Web Developer',
        name: 'Beks Kadyrbekov',
        info: 'Beks is our IT engineer. He supports and maintains computer systems. He is responsible for the company data and manages our official website.',
        photo: webDevImg
    },
    lawyer: {
        position: 'Legal adviser & corporate lawyer',
        name: 'Nurlan Kursanbekov',
        info: 'Nurlan Kursanbekov is the company\'s lawyer and legal adviser.he is responsible for effective support of international and local transactions. He has repeatedly received corporate awards for professional and effective protection of company\'s  interests.Then he had worked as an expert in the international project of the American Bar association (ABA Rolly) "Improvement of the national legislation of the Kyrgyz Republic in the Field of telecommunications and communications. He is also engaged in scientific research of taxation and financial law.',
        photo: lawyerImg
    }

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
                        <h2 className='info__title staff__title'>{STAFF.secretary.name}</h2>
                        <h4 className='text-center text-info staff__position'>{STAFF.secretary.position}</h4>
                        <p className='info__text info__text-right'>{STAFF.secretary.info}</p>
                    </div>
                    <div className='info__item'>
                        <div className='info__pic secretary__pic' style={{backgroundImage: `url(${STAFF.secretary.photo})`}}/>
                    </div>
                </section>
                <section className='info__section staff__info__section info__staff container'>
                    <div className='info__item'>
                        <h2 className='info__title staff__title'>{STAFF.accountant.name}</h2>
                        <h4 className='text-center text-info staff__position'>{STAFF.accountant.position}</h4>
                        <p className='info__text info__text-left'>{STAFF.accountant.info}</p>
                    </div>
                    <div className='info__item'>
                        <div className='info__pic accountant__pic' style={{backgroundImage: `url(${STAFF.accountant.photo})`}}>

                        </div>
                    </div>
                </section>
                <section className='info__section staff__info__section info__staff container'>
                    <div className='info__item'>
                        <h2 className='info__title staff__title'>{STAFF.partner.name}</h2>
                        <h4 className='text-center text-info staff__position'>{STAFF.partner.position}</h4>
                        <p className='info__text info__text-left'>{STAFF.partner.info}</p>
                    </div>
                    <div className='info__item'>
                        <div className='info__pic partner__pic' style={{backgroundImage: `url(${STAFF.partner.photo})`}}>

                        </div>
                    </div>
                </section>
                <section className='info__section staff__info__section info__staff container'>
                    <div className='info__item'>
                        <h2 className='info__title staff__title'>{STAFF.webDev.name}</h2>
                        <h4 className='text-center text-info staff__position'>{STAFF.webDev.position}</h4>
                        <p className='info__text info__text-left'>{STAFF.webDev.info}</p>
                    </div>
                    <div className='info__item'>
                        <div className='info__pic webdev__pic' style={{backgroundImage: `url(${STAFF.webDev.photo})`}}>

                        </div>
                    </div>
                </section>
                <section className='info__section staff__info__section info__staff container'>
                    <div className='info__item'>
                        <h2 className='info__title staff__title'>{STAFF.lawyer.name}</h2>
                        <h4 className='text-center text-info staff__position'>{STAFF.lawyer.position}</h4>
                        <p className='info__text info__text-left'>{STAFF.lawyer.info}</p>
                    </div>
                    <div className='info__item'>
                        <div className='info__pic lawyer__pic' style={{backgroundImage: `url(${STAFF.lawyer.photo})`}}>

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
                <section className='info__section staff__info__section who container'>
                    <div className='info__item'>
                        <h2 className='info__title staff__title'>{STAFF.CEO.name}</h2>
                        <h4 className='text-center text-info staff__position'>{STAFF.CEO.position}</h4>
                        <p className='info__text info__text-left'>{STAFF.CEO.info}</p>
                    </div>
                    <div className='info__item'>
                        <div className='info__pic ceo__pic' style={{backgroundImage: `url(${STAFF.CEO.photo})`}}>

                        </div>
                    </div>
                </section>
                <section className='info__section staff__info__section info__what container'>
                    <div className='info__item'>
                        <div className='info__pic gManager__pic' style={{backgroundImage: `url(${STAFF.gManager.photo})`}}>

                        </div>
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
                        <div className='info__pic secretary__pic' style={{backgroundImage: `url(${STAFF.secretary.photo})`}}>

                        </div>
                    </div>
                    <div className='info__item'>
                        <h2 className='info__title staff__title'>{STAFF.secretary.name}</h2>
                        <h4 className='text-center text-info staff__position'>{STAFF.secretary.position}</h4>
                        <p className='info__text info__text-right'>{STAFF.secretary.info}</p>
                    </div>
                </section>
                <section className='info__section staff__info__section info__staff container'>
                    <div className='info__item'>
                        <h2 className='info__title staff__title'>{STAFF.accountant.name}</h2>
                        <h4 className='text-center text-info staff__position'>{STAFF.accountant.position}</h4>
                        <p className='info__text info__text-left'>{STAFF.accountant.info}</p>
                    </div>
                    <div className='info__item'>
                        <div className='info__pic accountant__pic' style={{backgroundImage: `url(${STAFF.accountant.photo})`}}>

                        </div>
                    </div>
                </section>
                <section className='info__section staff__info__section info__staff container'>
                    <div className='info__item'>
                        <div className='info__pic partner__pic' style={{backgroundImage: `url(${STAFF.partner.photo})`}}>

                        </div>
                    </div>
                    <div className='info__item'>
                        <h2 className='info__title staff__title'>{STAFF.partner.name}</h2>
                        <h4 className='text-center text-info staff__position'>{STAFF.partner.position}</h4>
                        <p className='info__text info__text-right'>{STAFF.partner.info}</p>
                    </div>
                </section>
                <section className='info__section staff__info__section info__staff container'>
                    <div className='info__item'>
                        <h2 className='info__title staff__title'>{STAFF.webDev.name}</h2>
                        <h4 className='text-center text-info staff__position'>{STAFF.webDev.position}</h4>
                        <p className='info__text info__text-left'>{STAFF.webDev.info}</p>
                    </div>
                    <div className='info__item'>
                        <div className='info__pic webdev__pic' style={{backgroundImage: `url(${STAFF.webDev.photo})`}}>

                        </div>
                    </div>
                </section>
                <section className='info__section staff__info__section info__staff container'>
                    <div className='info__item'>
                        <div className='info__pic lawyer__pic' style={{backgroundImage: `url(${STAFF.lawyer.photo})`}}>

                        </div>
                    </div>
                    <div className='info__item'>
                        <h2 className='info__title staff__title'>{STAFF.lawyer.name}</h2>
                        <h4 className='text-center text-info staff__position'>{STAFF.lawyer.position}</h4>
                        <p className='info__text info__text-right'>{STAFF.lawyer.info}</p>
                    </div>
                </section>
            </div>
        );
    }
};


export default StaffMiddle;
