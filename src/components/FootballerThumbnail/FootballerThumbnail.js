import React from 'react';

import imageNotAvailable from '../../assets/images/image-not-available.jpg';
import {filesUrl} from "../../constants";

const styles = {
    width: '100%',
    height: '100%',
    marginRight: '10px'
};

const FootballerThumbnail = props => {
    let image = imageNotAvailable;

    if(props.image){
        image = filesUrl + props.image;
    }
    return <img alt="product" src={image} style={styles} />;
};

export default FootballerThumbnail;
