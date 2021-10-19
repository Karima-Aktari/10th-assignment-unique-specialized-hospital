import React from 'react';

const Facility = ({ facility }) => {
    const { img, name, description } = facility;

    return (
        <div className="col-lg-4 col-md-6 col-12 text-white p-4">
            <img src={img} className="w-100 rounded" alt="" />
            <h2>{name}</h2>
            <p>{description}</p>
        </div>
    );
};

export default Facility;