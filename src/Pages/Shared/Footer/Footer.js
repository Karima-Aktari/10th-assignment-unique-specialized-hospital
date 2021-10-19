import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <div className="bg-secondary p-4">
            <div className="bg-secondary d-flex justify-content-between px-4 footer">
                <div className="p-4">
                    <h3>About Us</h3>
                    <p className="fw-bolder">Lorem ipsum dolor sit amet consectetur <br />adipisicing elit. Architecto, quidem.<br /> Lorem ipsum dolor sit, amet consectetur<br /> adipisicing elit. Dolore, perferendis.</p>
                    <NavLink to="/department"> <p><i className="fas fa-h-square fs-1 text-hospital"></i> <i className="fas fa-clinic-medical fs-1 text-hospital"></i> <i className="fas fa-ambulance fs-1 text-hospital"></i></p></NavLink>
                </div>
                <div className="p-4 w-25 d-flex align-items-center footer">
                    <img src="https://pbs.twimg.com/profile_images/903542902416125952/hOi1EpDd_400x400.jpg" className="w-75 rounded-3" alt="" />
                </div>
                <div>
                    <h3>Contact Us</h3>
                    <h4><i className="fas fa-phone-volume"></i>+0194458988005</h4>
                    <p className="fw-bolder">Unique Specialist Hospital,<br /> House No. 46<br />Sheikh Kamal Sarani,<br />Road No. 16,<br />Rangs square (5th & 7th floor), <br />Dhanmondi, Dhaka 1209, Bangladesh</p>
                    <div>
                        <div className=" d-flex justify-content-center">
                            <a rel="noopener noreferrer"
                                target="_blank" href="https://labaid.com.bd/en/diagnostic/labaid-diagnostic-uttara-02"><i className="fab fa-facebook-square text-primary fs-1 p-1"></i></a>
                            <a rel="noopener noreferrer"
                                target="_blank" href="https://findoutadoctor.blogspot.com/2018/02/japan-bangladesh-friendship-hospital.html"><i className="fab fa-linkedin text-hospital fs-1 p-1"></i></a>
                            <a rel="noopener noreferrer"
                                target="_blank" href="https://labaid.com.bd/en/diagnostic/labaid-diagnostic-uttara-02"><i className="fab fa-instagram-square text-warning fs-1 p-1"></i></a>
                            <a rel="noopener noreferrer"
                                target="_blank" href="https://jbfh.org.bd/"><i className="fab fa-skype text-info fs-1 p-1"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <p className="text-center pt-3"> ©Stay connected, Stay safe©</p>
        </div>
    );
};

export default Footer;