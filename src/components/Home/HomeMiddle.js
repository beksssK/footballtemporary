import React from 'react';
//
import './HomeMiddle.css';
import MyCarousel from "../UI/MyCarousel/MyCarousel";
import InfoSection from "../Section/InfoSection";
import ceo from "../../assets/staff/CEO1.jpg";
import organizer from "../../assets/staff/organizer.jpg";
import gManager from "../../assets/staff/gManager1.jpg";
import mainPartner from "../../assets/staff/mainPartner.jpeg"
import useWindowWidth from "../../hooks/useWindowWidth";

const items = [
    {
        src: ceo,
        altText: 'CEO',
        caption: 'CEO'
    },
    {
        src: organizer,
        altText: 'Organizer',
        caption: 'Organizer'
    },
    {
        src: gManager,
        altText: 'General Manager',
        caption: 'General Manager'
    },
    {
      src: mainPartner,
      altText: "Main Partner",
      caption: "Main Partner",
    }
];

const generalInfo = {
  who: {
    title: "Who are we",
    infoText: <><b>HNBM SPORTS AGENCY</b> is an International, standard and global private sports agency;
      providing soccer trials,international camps for aspiring footballers ranging from age 15 and above.
      HNBM manages talents who needs our assistance in various ways.our agency with the coordination of
      our partners and other soccer agents try to fix our clients into clubs for trials or for signing on
      when necessary. Currently we made some transfers to the golf countries under our management and
      looking forward to other parts of the world for trials or signings. We're always ready to embrace
      client's that are interested in cooperating with our sports agency concerning the above mentioned
      details.</>,
  },
  what: {
    title: "What do we do",
    infoText: <>
      <ol>
        <li>We negotiate a professional contract or trial for our (players) clients.</li>
        <li>We closely follow each of our players to know their condition in club</li>
        <li>Our agency also finds clubs that allow our players or clients to evolve.</li>
        <li>We establish a career plan for our clients</li>
        <li>.We also suggest an investment plans to our clients to ensure that our player or client is comfortable after their soccer career.</li>
      </ol>
    </>
  },
  why: {
    title: "Why do they choose us?",
    infoText: <>
      We establish relationships based on professionalism, transparency and trust: values that define our philosophy and the way we work. Our code of ethics is more than a declaration of intent; it shows us the way to follow and has allow us to obtain recognition and results endorsement. We know that trust is something vague, built and maintained through fidelity. The professional relationship we have with our athletes goes beyond merely providing services. We feel the defeats, the successes and the tension  of athletes like ours and we learn from the challenges we go through successively.
    </>
  },
};


const settings = {
  adaptiveHeight: true,
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};


const HomeMiddle = () => {
  const isWindowSmall = useWindowWidth();
  return (
    <div className="HomeMiddle container">
      <section className='info__header container'>
        <h2 className='info__main-title'>HNBM SPORTS MANAGEMENT AND COMPANY LTD</h2>
      </section>
      {Object.keys(generalInfo).map((item,index) => (
        <InfoSection
          key={item}
          leftSided={index % 2 ? !isWindowSmall : false}
          infoTitle={generalInfo[item].title}
          sectionClass={item}
          infoText={generalInfo[item].infoText}
        />
      ))}
      <InfoSection leftSided={!isWindowSmall} sectionClass="staff" infoTitle="Our staff"
                   infoText={<>
                     Our Staffs are very diligent and capable of managing the affairs of the  company.each one of them plays a major role as expected of them in terms of cooperation of our clients and partners.is quite an experience working with our staffs along side our board of directors.
                   </>}
                   carousel={<MyCarousel settings={settings} items={items}/>}
      />
    </div>)
};

export default HomeMiddle;
