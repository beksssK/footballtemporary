import React from 'react';
import PlayersTop from "../../components/Players/PlayersTop";
import PlayersMiddle from "../../components/Players/PlayersMiddle";


const Players = (props) => {

    return (
        <>
            <PlayersTop/>
            <PlayersMiddle history={props.history}/>
        </>
    );
};

export default Players;
