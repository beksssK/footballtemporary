import React from 'react';
//
import "./PageTop.css";

const PageTop = ({classname, title}) => {
  return (
    <div className={`${classname}__top page-top`}>
      <div className={`page-top__header ${classname}__header`}>
        <h2 className={`page-top__title ${classname}__title`}>{title}</h2>
      </div>
    </div>
  );
};

export default PageTop;