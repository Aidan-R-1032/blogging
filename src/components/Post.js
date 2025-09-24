const div_styles = {
    'backgroundColor': 'lightsalmon',
    'display': 'flex',
    'flexDirection' : 'column',
    'color': 'whitesmoke',
    'padding' :'0.25rem',
    'margin': '0.25rem',
    'borderRadius': '25px',
}

const h1_styles = {
    'padding': '0.5rem'
}

const p_styles = {
    'padding': '0.5rem'
}


function Post(props){
    return (
        <div style={div_styles}>
            <h1 style={h1_styles}> {props.title} </h1>
            <p style={p_styles}> {props.body} </p>
        </div>
    )
}

export default Post;