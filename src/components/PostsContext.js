import { createContext, useContext, useState } from "react";
import testPosts from "../testPosts.json";

const PostsContext = createContext(undefined)

export const PostsProvider = ({children}) => {
    const [posts, setPosts] = useState(testPosts)
    return (
        <PostsContext.Provider value={{posts, setPosts}}> 
            {children}
        </PostsContext.Provider>
    )
}

export const usePosts = () => useContext(PostsContext);