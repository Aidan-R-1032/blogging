import posts from '../testPosts.json'

function TagNav({onTagSelect, selectedTag}) {
    const tagList = ["all", ...new Set(posts.map(p => p.tag))];
    const tagHandler = (t) => {
        if (onTagSelect) {
            onTagSelect(t);
        }
    }

    return (
        <div>
            <h1> Search By Tag: </h1>
            {tagList.map((tag)=> {
                return (<button 
                    id={tag}
                    key={tag} 
                    onClick={() => (tagHandler(tag))}> 
                        {tag} 
                    </button>)
            })}
        </div>
    )    
}

export default TagNav;