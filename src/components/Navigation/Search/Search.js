import React, {useState} from 'react';
import {Input, InputGroup} from "reactstrap";
import {push} from 'connected-react-router';
import './Search.css';
import axiosApi from "../../../axiosApi";
import {apiURL} from "../../../constants";
import {useDispatch} from "react-redux";

const Search = () => {
    const [foundPlayers, setFoundPlayers] = useState([]);
    const dispatch = useDispatch();
    const onInputChange = async (e) => {
        if (e.target.value.length) {
            try {
                const response = await axiosApi.get('/footballers?search=' + e.target.value);
                setFoundPlayers(response.data);
            } catch (e) {
                console.error(e);
            }
        } else {
            setFoundPlayers([]);
        }
    };
    const onListClick = (id) => {
        dispatch(push('/players/' + id));
        setFoundPlayers([]);
    };
    return (
        <InputGroup className='col-12 col-md-4 my-3 p-0 Search-bar'>
            <Input type='text' placeholder="Search the player" onChange={onInputChange}/>
            <ul style={{display: foundPlayers.length ?  'block' : 'none'}} className='Search-bar__dropdown position-absolute'>
                {foundPlayers.map(footballer => (
                    <li className='Search-bar__item'
                        key={footballer._id}
                        onClick={() => onListClick(footballer._id)}
                    >
                        <img width='auto' height='100%' src={apiURL + '/uploads/' + footballer.profilePhoto} alt=""/>
                        <span>{footballer.name} {footballer.surname}</span>
                    </li>
                ))}
            </ul>
        </InputGroup>
    );
};

export default Search;
