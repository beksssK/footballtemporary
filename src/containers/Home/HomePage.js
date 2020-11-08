import React from 'react';
//
import "./HomePage.css";
import HomeMiddle from "../../components/Home/HomeMiddle";
import PageTop from "../../components/Page/PageTop/PageTop";

const Home = () => {
    return (
        <>
            <PageTop classname="Home" title="HNBM"/>
            <HomeMiddle/>
        </>
    );
};

export default Home;
