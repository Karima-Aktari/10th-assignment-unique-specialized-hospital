import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const { serviceId } = useParams();
    const [details, setDetails] = useState([]);

    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setDetails(data))
    }, []);

    const exactDetail = details?.filter(detail => detail.id === serviceId)

    return (
        <div className="text-info bg-dark py-5">
            <h1>Details{serviceId}</h1>
            <div className="service p-3">
                <img src={exactDetail[0]?.img} className="w-50 rounded-3" alt="" />
                <h2>Service-Name: {exactDetail[0]?.name}</h2>
                <h3>Price: {exactDetail[0]?.price}</h3>
                <h3>Time: {exactDetail[0]?.time}</h3>
                <h6 className="px-3">Description: {exactDetail[0]?.description}</h6>
                <Link to="/"> <button className="btn btn-success">Booking</button></Link>
            </div>
        </div>
    );
};

export default ServiceDetails;