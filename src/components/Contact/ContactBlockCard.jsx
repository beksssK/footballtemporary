import React from 'react';

const ContactBlockCard = ({icon, title, text}) => {
  return (
    <div className='ContactBlock__card'>
      <div className='ContactBlock__card_icon'>
        {icon}
      </div>
      <div className='ContactBlock__card_text'>
        <h5 className='text-info'>{title}</h5>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default ContactBlockCard;