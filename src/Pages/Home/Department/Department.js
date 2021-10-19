import React from 'react';

const Department = ({ department }) => {
    const { name, img, description } = department;
    return (
        <div className="col-12 col-md-6">
            <img src={img} className=" p-2 rounded-pill" alt="" />
            <h2>{name}</h2>
            <p className="text-secondary text-center px-4">{description}</p>
        </div>
    );
};

export default Department;