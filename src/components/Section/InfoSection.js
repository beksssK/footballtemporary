import React from 'react';

const InfoSection = ({leftSided, sectionClass, infoTitle, infoText, carousel}) => {
  return leftSided ? (
    <section className={`info__section container info__${sectionClass}`}>
      <div className="info__item">
        <h2 className="info__title">{infoTitle}</h2>
        <div className='info__text info__text-left'>
          {infoText}
        </div>
      </div>
      <div className="info__item">
        <div className={`info__pic ${sectionClass}__pic`}>{carousel}</div>
      </div>
    </section>
  ) : (
    <section className={`info__section container info__${sectionClass}`}>
      <div className="info__item">
        <div className={`info__pic ${sectionClass}__pic`}>{carousel}</div>
      </div>
      <div className="info__item">
        <h2 className="info__title">{infoTitle}</h2>
        <div className='info__text info__text-right'>
          {infoText}
        </div>
      </div>
    </section>
  );
};

export default InfoSection;