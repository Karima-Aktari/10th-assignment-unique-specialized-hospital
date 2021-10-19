import React from 'react';
import Department from '../Department/Department';

const Departments = () => {
    const departments = [
        {
            name: "Cardiology",
            img: "https://wp02-media.cdn.ihealthspot.com/wp-content/uploads/sites/451/2019/04/27043104/HVNYC1-300x183.jpg",
            description: "Cardiology is the study and treatment of disorders of the heart and the blood vessels. A person with heart disease or cardiovascular disease may be referred to a cardiologist. ... A cardiologist specializes in diagnosing and treating diseases of the cardiovascular system"
        },
        {
            name: "Neurology",
            img: "https://store-images.s-microsoft.com/image/apps.10740.14480840250780326.a0c237d6-f36d-4a6b-95d8-f359eaa3615c.b0b93c9c-b695-44eb-ac2b-0e3136f24874?mode=scale&q=90&h=300&w=300",
            description: "Neurology is the branch of medicine concerned with the study and treatment of disorders of the nervous system. The nervous system is a complex, sophisticated system that regulates and coordinates body activities. It has two major divisions: Central nervous system: the brain and spinal cord."
        },
        {
            name: "Diagnostics",
            img: "https://www.bd.com/assets/images/our-products/microbiology-solutions/phoenix-system_C_DS_IDS_0616-0003.png?resize=360x270&rt=fill",
            description: "Medical diagnosis (abbreviated Dx, Dx, or Ds) is the process of determining which disease or condition explains a person's symptoms and signs. It is most often referred to as diagnosis with the medical context being implicit."
        },
        {
            name: "Dental",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1ohOfS_K7vq7XjlNIWt6y1UupN9vd0_DIpA&usqp=CAU",
            description: "Dental and oral health is an essential part of your overall health and well-being. Poor oral hygiene can lead to dental cavities and gum disease, and has also been linked to heart disease, cancer, and diabetes. Maintaining healthy teeth and gums is a lifelong commitment."
        },
        {
            name: "Eye Care",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjV4AmQsFVAISU_dRdo4Bjs9YP6vnhnwW0r6h7qx6vuwN0i1Q0pn2kNV5vAThNTlm1ry4&usqp=CAU",
            description: "An eye care professional is an individual who provides a service related to the eyes or vision. It is any healthcare worker involved in eye care, from one with a small amount of post-secondary training to practitioners with a doctoral level of education."
        },
        {
            name: "Emergency",
            img: "https://7omcu3a78zp40klds2w28klr-wpengine.netdna-ssl.com/wp-content/uploads/2021/08/GettyImages-916245482-1-350x233.jpg",
            description: "Emergency medical services, also known as ambulance services or paramedic services, are emergency services that provide urgent pre-hospital treatment and stabilisation for serious illness and injuries and transport to definitive care. "
        },
    ]
    return (
        <div className="mt-3 pt-3">
            <h2>Our Service Departments</h2>
            <div className="row mx-auto">
                {
                    departments.map(department => <Department
                        key={department.name}
                        department={department}></Department>)
                }
            </div>
        </div>
    );
};

export default Departments;