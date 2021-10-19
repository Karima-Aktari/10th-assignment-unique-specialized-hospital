import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const Services = (props) => {
    const { id, img, name, description } = (props.service)

    return (
        <div className="col-lg-4 col-md-6 col-12 text-white p-4 services">
            <img src={img} className="w-100 rounded" alt="" />
            <h2>{name}</h2>
            <p>{description}</p>
            <Link to={`/service/${id}`}><button className="btn btn-warning px-3">Details</button></Link>
        </div>
    );
};

export default Services;