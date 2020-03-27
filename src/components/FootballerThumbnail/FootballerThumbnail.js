import React from 'react';

import imageNotAvailable from '../../assets/images/image-not-available.jpg';

const styles = {
    width: '100%',
    height: 'auto',
    marginRight: '10px'
};

const FootballerThumbnail = props => {
    let image = imageNotAvailable;

    if(props.image && props.imgType){
        console.log('here');
        image = `data:${props.imgType};base64, ${props.image}`;
    }
    return <img alt="product" src={image} style={styles} className="img-thumbnail" />;
};

export default FootballerThumbnail;
