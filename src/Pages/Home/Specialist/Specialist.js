import React from 'react';

const Specialist = ({ specialist }) => {
    const { img, name, specialty } = specialist;

    return (
        <div className="col-12 col-md-6 p-4">
            <img src={img} className="p-4 img-fluid rounded-3" alt="" />
            <h2>{name}</h2>
            <h3 className="text-info text-center px-4">{specialty}</h3>
        </div>
    );
};

export default Specialist;