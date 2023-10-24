import React, { useState, useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { FaSearch } from 'react-icons/fa';

import { fetchZipInfo } from '../actions';

function Search() {
    const [zip, setZip] = useState('')
    const [inputValue, setInputValue] = useState('');
    const timeoutId = useRef(null);

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchZipInfo(zip));
    }, [zip]);

    const handleChange = (evt) => {
        evt.preventDefault();
        setInputValue(evt.target.value);
        if (timeoutId.current) clearTimeout(timeoutId.current);
        timeoutId.current = setTimeout(() => {
            setZip(evt.target.value)
        }, 1000)
    }

    return (
        <SearchContainer>
            <SearchIcon />
            <SearchInput onChange={handleChange} type='text' value={inputValue} />
        </SearchContainer>
    )
}

export default Search;

const SearchContainer = styled.div`
    display: flex;
    justify-content: center;
    border-radius: 2rem;
    align-items: center;
`;

const SearchIcon = styled(FaSearch)`
    position: relative;
    color: linear-gradient(to right, rgba(3, 159, 122, 0.5), rgba(63,94,251,1));
    left: 1.5rem;
`;

const SearchInput = styled.input`
    border-radius: 2rem;
    margin: 2rem 0;
    border: 4rem solid linear-gradient(to right, rgba(3, 159, 122, 0.5), rgba(63,94,251,1));
    width: 20rem;
    background: white;
    color: black;
    padding-left:8.8rem;
    font-weight: 700;
`;