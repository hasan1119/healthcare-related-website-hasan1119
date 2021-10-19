import React from 'react';
import {Row} from 'react-bootstrap';
import useAuth from '../hooks/useAuth.js';

const Service = () => {
    const {services} = useAuth()
    return <Row>{
        services.map(service => {
           
            return (
                <SingleService service={service} key={service.key} />
            )
        })
    }</Row>;
};


const SingleService = ({ service }) => {
     const { title, img, desc } = service;
    return <h1>{title}</h1>;
}


export default Service;


