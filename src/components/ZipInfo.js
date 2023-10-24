import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import styled, { keyframes } from 'styled-components';
import { ImSpinner } from 'react-icons/im';


function ZipInfo(props) {
    useEffect(() => {
        
    }, [props.info]);
    console.log(props.info)
    return (
        <ZipContainer>
            <h3>Zip Code Information</h3>
            {props.info['post code'] ? <div>Post Code: {props.info['post code']}</div> : null}
            {props.info.country ? <div>Country: {props.info.country}</div> : null}
            {props.info['country abbreviation'] ? <div>Country Abbreviation: {props.info['country abbreviation']}</div> : null}
            {props.info.places && props.info.places.map((place, index) => (
                <div key={index}>
                    <div>Place Name: {place['place name']}</div>
                    <div>State: {place.state}</div>
                    <div>State Abbreviation: {place['state abbreviation']}</div>
                    <div>Longitude: {place.longitude}</div>
                    <div>Latitude: {place.latitude}</div>
                </div>
            ))}
        </ZipContainer>
    )
}

const mapStateToProps = state => {
    return {
        info: state.info,
        loading: state.loading,
        error: state.error
    }
}

export default connect(mapStateToProps, {})(ZipInfo)



const ZipContainer = styled.div`
    margin: 1rem auto 0;
    padding: 1rem;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 1rem;
    justify-items: center;
    align-items: center;
    width: 60%;
    background: linear-gradient(to right, rgba(3, 159, 122, 0.5), rgba(63,94,251,1));
    border-radius: 15px;
    box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.25);
    color: white;
`;

// {
    // "post code": "40143", 
    // "country": "United States",
    //  "country abbreviation": "US",
    //   "places": [{
    //     "place name": "Hardinsburg",
    //      "longitude": "-86.4537",
    //       "state": "Kentucky",
    //        "state abbreviation": "KY",
    //         "latitude": "37.7512"}]}