import { createContext, useContext, useState, useEffect} from "react";
// import testPosts from "../testPosts.json";

const PostsContext = createContext(undefined)

export const PostsProvider = ({children}) => {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch("http://localhost:5000/posts");
                if (!response.ok) {
                    throw new Error("Failed to fetch posts");
                }
                const data = await response.json();
                setPosts(data);
            }
            catch (err) {
                console.log(err);
                setError(err.message);
            }
            finally {
                setLoading(false)
            }
        };
        fetchPosts();
        console.log(posts)
    }, []);

    return (
        <PostsContext.Provider value={{posts, setPosts, loading, error }}> 
            {children}
        </PostsContext.Provider>
    )
}

export const usePosts = () => useContext(PostsContext);