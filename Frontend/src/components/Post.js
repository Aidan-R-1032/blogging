import DeleteWarningButton from "./DeleteWarningButton"
import { useState, useEffect } from "react"
import { usePosts } from "../contexts/PostsContext"

const div_styles = {
    'backgroundColor': 'lightsalmon',
    'display': 'flex',
    'flexDirection' : 'column',
    'color': 'whitesmoke',
    'padding' :'0.25rem',
    'margin': '0.25rem',
    'borderRadius': '25px',
}

const p_styles = {
    'padding': '0.5rem'
}

const deleteTogglerStyle = {
  'display' : 'flex',
  'justifyContent' : 'center',
  'alignItems' : 'center',
  'width' : '2rem',              
  'height' : '2rem',
  'backgroundColor' : 'lightsalmon',
  'color' : 'white',
  'border' : '1px solid white',
  'borderRadius' : '8px',
  'cursor' : 'pointer',
  'fontWeight' : 'bold',
  'fontSize' : '1rem',
  'margin' : '0.5rem 0.5rem auto 0.3rem'
};

const mediaStyle = {
    'width' : '85%',
    'marginTop' : '1rem',
    'borderRadius' : '25px'
}

function Post(props){
    const [displayDelete, setDisplayDelete] = useState(false);
    const { posts, setPosts } = usePosts();

    const toggleDelete = () => {
        setDisplayDelete(!displayDelete);
    }

    const handleDelete = () => {
        toggleDelete();
        setPosts(posts.filter(p => p.id !== props.id));
    }

    useEffect(() => {   // prevents scrolling
        if(displayDelete) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [displayDelete]);
    return (
        <div style={div_styles}>
            <div style={{'marginLeft' : 'auto'}}>
                <button 
                    onClick={toggleDelete}
                    style={deleteTogglerStyle}>
                        X 
                </button>
            </div>
            {displayDelete ? (
                <DeleteWarningButton 
                    alertHead={"Are you sure you want to delete this post?"}
                    alertMsg={`Once you delete a post, you will not be able to view it or any comments attactched. 
                        Please make sure you are certain!`}
                    deleteFunc={handleDelete}
                />
                ) : (
                <div>
                    <p style={p_styles}> {props.body} </p>
                    {props.media_url && (
                        <div>
                            {props.media_url.match(/\.(mp4|webm|ogg)$/i) ? (
                                <video
                                    controls
                                    style={mediaStyle}
                                >
                                    <source src={`http://localhost:5000${props.media_url}`} type="video/mp4" />
                                </video>
                            ) : (
                                <img
                                    src={`http://localhost:5000${props.media_url}`}
                                    alt="Post media"
                                    style={mediaStyle}
                                />
                            )}
                        </div>
                    )}
                </div>
            )}

        </div>
    )
}

export default Post;