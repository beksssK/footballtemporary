import React from 'react';

const StaffCard = ({leftSided, staffClass, name, position, info, photoLink}) => {
  return leftSided ? (
    <section className='info__section staff__info__section container'>
      <div className='info__item'>
        <h2 className='info__title staff__title'>{name}</h2>
        <h4 className='text-center text-info staff__position'>{position}</h4>
        <p className='info__text info__text-left'>{info}</p>
      </div>
      <div className='info__item'>
        <div className={`info__pic ${staffClass}__pic`} style={{backgroundImage: `url(${photoLink})`}}/>
      </div>
    </section>
  ) : (
    <section className='info__section staff__info__section container'>
      <div className='info__item'>
        <div className={`info__pic ${staffClass}__pic`} style={{backgroundImage: `url(${photoLink})`}}/>
      </div>
    <div className='info__item'>
      <h2 className='info__title staff__title'>{name}</h2>
      <h4 className='text-center text-info staff__position'>{position}</h4>
      <p className='info__text info__text-left'>{info}</p>
    </div>
  </section>
  );
};

export default StaffCard;