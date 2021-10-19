import React from 'react';

const Post = ({ post }) => {
    const { img, title, description } = post;
    return (
        <div className=" col-12 col-md-6 d-flex p-4">
            <div className="p-2 col-6">
                <img src={img} className="w-100" alt="" />
            </div>
            <div className="text-white px-2 col-6">
                <h4>{title}</h4>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Post;