import React, {useEffect} from 'react';
import './PlayersMiddle.css';
import SportsmanCard from "../SportsmanCard/SportsmanCard";
import {useDispatch, useSelector} from "react-redux";
import {fetchFootballers} from "../../store/actions/footballersActions";
import {Container, Row} from "reactstrap";
import Preloader from "../UI/Preloader/Preloader";


const PlayersMiddle = (props) => {
    const footballers = useSelector(state => state.footballers.allFootballers);
    const dispatch = useDispatch();
    const goToPlayer = (id) => {
        props.history.push('/players/' + id);
    };
    useEffect(() => {
        dispatch(fetchFootballers());
    }, [dispatch]);
    return (
        <div className='PlayersMiddle py-5'>
            <Container>
                {footballers.length ? (
                    <Row className='justify-content-center'>
                        {footballers.map(footballer => (
                            <SportsmanCard
                                onClick={() => goToPlayer(footballer._id)}
                                key={footballer._id}
                                image={footballer.profilePhoto}
                                name={footballer.name}
                                surname={footballer.surname}
                                position={footballer.position}
                            />
                        ))}
                    </Row>
                ) : (
                    <div className='text-center'>
                        <Preloader/>
                    </div>
                )}
            </Container>
        </div>
    );
};





export default PlayersMiddle;
