import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Facilities from '../Facilities/Facilities';
import Posts from '../Posts/Posts';
import Services from '../Services/Services';
import './Home.css';

const Home = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="home p-5">
            <h1 className="text-info"> Our Services</h1>
            <div className="row mx-auto">
                {
                    services.map(service => <Services service={service}
                        key={service.id}></Services>)
                }
            </div>
            <div><Facilities></Facilities></div>
            <div><Posts></Posts></div>
        </div>
    );
};

export default Home;