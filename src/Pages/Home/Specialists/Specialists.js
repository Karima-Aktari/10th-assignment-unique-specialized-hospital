import React from 'react';
import Specialist from '../Specialist/Specialist';

const Specialists = () => {
    const specialists = [
        {
            name: "Dr Devi Shetty ",
            img: "https://pbs.twimg.com/media/D6ENnPaX4AEIBj2.jpg",
            specialty: "Cardiac Specialist "
        },
        {
            name: "Prof. Dr. Md. Matiur Rahman",
            img: "https://doctoryouneed.org/wp-content/uploads/2019/10/matiur.png",
            specialty: "Neurology Specialist"
        },
        {
            name: "Dr. Md. Nurul Islam",
            img: "https://images.pexels.com/photos/4173239/pexels-photo-4173239.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            specialty: "Medicine Specialist"
        },
        {
            name: "Dr. Rehnuma Khan",
            img: "https://st4.depositphotos.com/2070213/i/600/depositphotos_274519874-stock-photo-female-smiling-doctor-armcrossed-portrait.jpg",
            specialty: "Hormone Specialist"
        },
        {
            name: "Dr. Humaira Tasnim",
            img: "https://rcpi-live-cdn.s3.amazonaws.com/wp-content/uploads/2015/11/iStock_000062082696_Medium-600x400.jpg",
            specialty: "Dental Specialist"
        },
    ]
    return (
        <div className="py-4 bg-success">
            <h1 className="text-dark">We are Specialist</h1>
            <div className="row mx-auto">
                {
                    specialists.map(specialist => <Specialist
                        key={specialist.name}
                        specialist={specialist}></Specialist>)
                }
            </div>
        </div>
    );
};

export default Specialists;