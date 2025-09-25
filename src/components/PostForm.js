const form_style = {
    'display': 'flex',
    'flexDirection' : 'column',
    'backgroundColor' : 'lightsalmon',
    'margin' : '1rem 0',
    'padding' : '0.5rem',
    'color' : 'white',
    'flex' : '1 1 100%',
    'alignItems' : 'center',
    'borderRadius' : '25px'
}

const labelStyle = { 
    'width': "2.5rem", 
    'textAlign': "right", 
    'marginRight': "0.25rem" 
};

const textareaStyle = {
    'width': '20rem',
    'minHeight': '5rem',
    'borderRadius': '8px',
    'border': '1px solid black',
    'padding': '0.25rem',
    'resize': 'vertical',
    'boxSizing': 'border-box',
    'color': 'black'
  };

function PostForm() {
    return (
        <form style={form_style}>
            <div>
                <label htmlFor="post-title" style={labelStyle}> Title: </label>
                <input type="text" id="post-title" required/>
            </div>
            <div>
                <label htmlFor="post-body" style={labelStyle}> Body: </label>
                <input type="textarea" id="post-body" style={textareaStyle} required/>
            </div>
            <div>
                <label htmlFor="post-media" style={labelStyle}>  Media: </label>
                <input type="file" accepts="image/*,video/*" />
            </div>
            <div>
                <button type="submit" id="post-submit"> Post </button>
            </div>
        </form>
    )
}

export default PostForm;