import Post from './Post'
// import React, {useState, useEffect } from 'react';
// import posts from '../testPosts.json'
import { usePosts } from '../contexts/PostsContext'


function PostContainer({selectedTag}) {
    const { posts } = usePosts()


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
                <Post
                    key={p.id} 
                    body={p.body_text} 
                    media_url={p.media_url}
                    date={p.created_at}
                />
            ))}
        </div>
    </>
  );
}

export default PostContainer;