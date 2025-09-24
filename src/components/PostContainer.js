import Post from './Post'
// import React, {useState, useEffect } from 'react';

const posts = [
  { title: 'My First Post', body: 'Hello World!' },
  { title: 'My Second Post', body: 'Hello World!' },
  { title: 'My Third Post', body: 'Hello World!' },
  { title: 'My Fourth Post', body: 'Hello World!' },
];


function PostContainer() {
    // const [posts, setPosts] = useState([])

    // useEffect(() => {
    //     fetch('placeholder_url.com')
    //     .then((response) => response.json())
    //     .then((data) => setPosts(data));
    // }, []);

    console.log('posts array:', posts);

    return (
    <>
        <style>{`
            .post-container {
                display: grid;
                grid-template-columns: 1fr; /* 1 column on small screens */
                gap: 1rem;
            }

        /* 3 columns on wider screens (desktop/monitor) */
            @media (min-width: 768px) {
                .post-container {
                    grid-template-columns: repeat(3, 1fr);
                }
            }
        `}
        </style>
        <div className="post-container">
            {posts.map((p, index) => (
                <Post key={index} title={p.title} body={p.body} />
            ))}
        </div>
    </>
  );
}

export default PostContainer;