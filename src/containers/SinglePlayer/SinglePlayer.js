import React from 'react';
//
import "./SinglePlayer.css";
import SinglePlayerTop from "../../components/SinglePlayer/SinglePlayerTop";
import SinglePlayerMiddle from "../../components/SinglePlayer/SinglePlayerMiddle";

const SinglePlayer = (props) => {
    return (
        <>
            <SinglePlayerTop/>
            <SinglePlayerMiddle params={props.match.params}/>
        </>
    );
};

export default SinglePlayer;
