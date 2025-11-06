import posts from '../testPosts.json'

const columnStyle = {
    'display': 'flex', 
    'flexDirection': 'column', 
    'gap' : '0.5rem'
}

const tagButtonStyle = {
    'padding': '0.5rem 0.75rem',
    'textAlign' : 'left',
    'border' : 'none',
    'cursor': 'pointer',
    'borderRadius' : '4px'
}

const stuckStyle = { 
    'position' : 'sticky', 
    'top' : '1rem' 
}

function TagNav({onTagSelect, selectedTag}) {
    const tagList = ["all", ...new Set(posts.map(p => p.tag))];
    const tagHandler = (t) => {
        if (onTagSelect) {
            onTagSelect(t);
        }
    }

    return (
        <div style={stuckStyle}>
            <h1> Search By Tag: </h1>
            <div style={columnStyle}>
                {tagList.map((tag)=> {
                    return (<button 
                        id={tag}
                        key={tag}
                        style={tagButtonStyle} 
                        onClick={() => (tagHandler(tag))}> 
                            {tag} 
                        </button>)
                })}
            </div>
        </div>
    )    
}

export default TagNav;