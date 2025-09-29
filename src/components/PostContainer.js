import Post from './Post'
// import React, {useState, useEffect } from 'react';
import posts from '../testPosts.json'


function PostContainer({selectedTag}) {
    // const [posts, setPosts] = useState([])

    // useEffect(() => {
    //     fetch('placeholder_url.com')
    //     .then((response) => response.json())
    //     .then((data) => setPosts(data));
    // }, []);

    const visible = (!selectedTag || selectedTag === 'all')
        ? posts 
        : posts.filter((p) => {return (p.tag === selectedTag)})

    return (
    <>
        <style>{`
            .post-container {
                display: grid;
                grid-template-columns: 1fr; /* 1 column on small screens */
                gap: 1rem;
            }

            @media (min-width: 768px) {
                .post-container {
                    grid-template-columns: repeat(3, 1fr);
                }
            }
        `}
        </style>
        <div className="post-container">
            {visible.map((p, index) => (
                <Post key={index} title={p.title} body={p.body} />
            ))}
        </div>
    </>
  );
}

export default PostContainer;