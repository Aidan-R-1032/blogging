import { useState, useRef } from "react";

const formStyle = {
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

// const labelStyle = { 
//     'width': "2.5rem", 
//     'textAlign': "right", 
//     'marginRight': "0.25rem" 
// };

const textareaStyle = {
    'width': '20rem',
    'minHeight': '5rem',
    'borderRadius': '8px',
    'border': '1px solid black',
    'padding': '0.25rem',
    'resize': 'vertical',
    'boxSizing': 'border-box',
    'color': 'black',
    'backgroundColor' : 'antiquewhite',
    'textAlign' : 'left',
    'wordWrap' : 'break-word',
    'overflowWrap' : 'anywhere'
  };

  const buttonStyle = {
    'background' : "transparent",
    'border': "1px solid antiquewhite",
    'color': "white",
    'padding': "6px 8px",
    'borderRadius': "8px",
    'cursor': "pointer"
  }

  const toolbarStyle = {
    'display' : 'flex',
    'width' : '100%',
    'justifyContent' : 'space-between',
    'alignItems': 'center',
    'marginTop':'0.25rem'
  };

  const fileNameStyle = {
    'marginLeft' : '30px', 
    'opacity' : '0.95', 
    'display' : 'flex'
  }
function PostForm() {
    const [text, setText] = useState("");           // used for the textarea data
    const [fileName, setFileName] = useState("");   // used for managing file names
    const fileRef = useRef(null);                   // used for managing actual files
    const MAX = 280;

    let openFilePicker = () => {                    // uploads the initial file if a user selects one
        fileRef.current && fileRef.current.click();
    }

    let onFileChange = (e) => {                     // file modification
        try {
            const f = e.target.files && e.target.files[0];
            if (f) setFileName(f.name);
            else setFileName("");    
            console.log("You changed the file!");
        } catch {
            console.log("Umm, there was an error - yikes")
        }
    }

    let handleSubmit = (e) => {
        e.preventDefault();

        if(!text.trim() && !fileName) return;

        console.log("Post submitted:", {text, fileName});
        setText("");
        setFileName("");
        if (fileRef.current) fileRef.current.value = null;
    }

    const canPost = text.trim().length > 0;         // check to see if the user has typed anything at all

    return (
        <form style={formStyle} onSubmit={handleSubmit}>
            <div>
                <textarea 
                    id="post-body" 
                    style={textareaStyle} 
                    onChange={(e) => {setText(e.target.value)}}
                    required
                />
            </div>

            <div style={toolbarStyle}>
                <div id="media">
                    <input 
                        ref={fileRef} 
                        type="file" 
                        accepts="image/*,video/*" 
                        style={{'display' : 'none'}} 
                        onChange={onFileChange}
                    />
                    <button 
                        type="button" 
                        onClick={openFilePicker} 
                        style={buttonStyle}>
                             +Media 
                    </button>
                    <span style={{fileNameStyle}}>
                        {fileName ? `Selected: ${fileName}` : ""}
                    </span> 
                </div>

                <div style={{ fontSize: "0.9rem" }}>
                    {text.length}/{MAX}
                </div>
                
                <button type="submit" style={buttonStyle} disabled={!canPost}>
                    Post
                </button>
            </div>
        </form>
    )
}

export default PostForm;