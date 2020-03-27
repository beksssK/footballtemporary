import React, {useEffect} from 'react';
import './PlayersMiddle.css';
import SportsmanCard from "../SportsmanCard/SportsmanCard";
import {useDispatch, useSelector} from "react-redux";
import {fetchFootballers} from "../../store/actions/footballersActions";
import {Container, Row} from "reactstrap";

const PlayersMiddle = (props) => {
    const footballers = useSelector(state => state.allPlayers.allFootballers);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchFootballers());
    }, [dispatch]);
    console.log(footballers);
    return (
        <div className='PlayersMiddle py-5'>
            <Container>
                <Row className='justify-content-center'>
                    {footballers.length ? footballers[0].map(footballer => (
                        <SportsmanCard
                            image={footballer.profile_photo}
                            imgType={footballer.type_photo}
                            key={footballer.id}
                            name={footballer.name}
                            surname={footballer.surname}
                            position={footballer.position}
                            linkPhoto={footballer.link_photo}
                        />
                    )) : null}
                </Row>
            </Container>
        </div>
    );
};

export default PlayersMiddle;
