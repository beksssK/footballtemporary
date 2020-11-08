import React from 'react';
//
import PlayersMiddle from "../../components/Players/PlayersMiddle";
import PageTop from "../../components/Page/PageTop/PageTop";
import "./Players.css";


const Players = (props) => {

    return (
        <>
            <PageTop classname="Players" title="Our players"/>
            <PlayersMiddle history={props.history}/>
        </>
    );
};

export default Players;
