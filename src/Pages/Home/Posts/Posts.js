import React from 'react';
import Post from '../Post/Post';

const Posts = () => {
    const posts = [
        {
            img: "https://expertchikitsa.com/wp-content/uploads/2020/08/Gastric-Banding-in-Turkey.jpg",
            title: "Bariatric Surgery and COVID-19",
            description: "Bariatric surgery and COVID-19 Long before the world had to deal with COVID, another pandemic lingered in the shadows.This pandemic affected the weight, lifestyle, and health of many across the world."
        },
        {
            img: "https://us.123rf.com/450wm/bilderriese/bilderriese1902/bilderriese190200063/117795456-diabetes-complications-and-diseases-medical-3d-vector-illustration-on-white-background.jpg?ver=6",
            title: "How does diabetes affect the kidneys",
            description: "Diabetes is a condition that occurs as a result of high blood glucose/blood sugar. The underlying cause for this is a build-up of glucose in the blood that doesn’t reach body cells due to a dearth or underutilization of insulin. "
        },
        {
            img: "https://image.freepik.com/free-vector/effect-coronavirus-human-heart-3d-covid-19-cells-infect-human-heart-isolated-white-background-illustration_68196-3429.jpg",
            title: "Effects of COVID-19 on the heart post recovery",
            description: "Even many weeks after recovery from COVID-19, people have been reporting unfavorable health effects on the body. These symptoms are referred to as ‘long-haul’ symptoms that appear long after initial recovery.  "
        },
        {
            img: "https://5.imimg.com/data5/NR/PJ/MY-8592271/sewage-treatment-plant-28stp-29-500x500.png",
            title: "Why Primary treatment is important",
            description: "Reports from health experts have suggested that children are not at more risk from the third wave of COVID-19. However, it is best to stay cautious for your children’s sake. "
        },
    ]
    return (
        <div>
            <h1 className="text-info">RECENT POSTS</h1>
            <div className="row">
                {
                    posts.map(post => <Post
                        key={post.title}
                        post={post}></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;