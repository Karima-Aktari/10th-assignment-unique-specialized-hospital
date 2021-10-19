import React from 'react';
import Facility from '../Facility/Facility';

const Facilities = () => {
    const facilities = [
        {
            img: "https://cdn.xxl.thumbs.canstockphoto.com/emergency-hospital-room-interior-of-emergency-hospital-room-with-bed-and-equipment-stock-photograph_csp16671796.jpg",
            name: "Surgical centers",
            description: "Ambulatory surgical centers, also called outpatient surgical facilities, allow patients to receive certain surgical procedures outside a hospital environment. "
        },
        {
            img: "https://adoption.com/wiki/images/thumb/4/4d/Where-to-Have-Your-Baby.jpg/400px-Where-to-Have-Your-Baby.jpg",
            name: "Birth centers",
            description: "A birth center is a healthcare facility for childbirth that focuses on the midwifery model, according to the American Association of Birth Centers."
        },
        {
            img: "https://image.shutterstock.com/image-photo/blood-260nw-71139241.jpg",
            name: "Blood banks",
            description: "Blood banks allow donors to donate blood and platelets while also storing and sorting blood into components that can be used most effectively by patients."
        },
        {
            img: "https://image.shutterstock.com/image-photo/medicine-online-service-healthcare-concept-260nw-1725431644.jpg",
            name: "Clinics and medical offices",
            description: "The definition of a clinic is “a facility for diagnosis and treatment of outpatients.” There are many healthcare facilities that fit that definition across a wide variety of treatment specialties."
        },
        {
            img: "https://us.123rf.com/450wm/spukkato/spukkato2003/spukkato200300206/144059248-close-up-of-woman-hands-checking-blood-sugar-level-by-glucose-meter-for-diabetes-tester-using-as-med.jpg?ver=6",
            name: "Diabetes education centers",
            description: "Diabetes education centers typically offer classes, education, support groups and a variety of resources to help patients manage their diabetes and live as complication-free as possible."
        },
        {
            img: "https://www.maltamed.org/vendor/unisharp/laravel-ckeditor/ckfinder/userfiles/files/xray-350x246.jpg",
            name: "Imaging and radiology centers",
            description: "Hospital facilities will likely handle imaging for urgent cases, such as an MRI for a brain injury. But any imaging that can be scheduled in advance, such as ultrasounds to monitor a pregnancy, could take place at an imaging center."
        },
    ]
    return (
        <div className="p-5">
            <h1 className="text-success">FACILITIES</h1>
            <div className="row mx-auto">
                {
                    facilities.map(facility => <Facility
                        key={facility.name}
                        facility={facility}></Facility>)
                }
            </div>

        </div>
    );
};

export default Facilities;