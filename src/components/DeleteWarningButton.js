function Button({ children, setStyle, clickHandler }) {
  return (
    <button style={setStyle} onClick={clickHandler}>
      {children}
    </button>
  );
}

function Alert({ children }) {
  return (
    <>
      <div className="Overlay"></div>
      <div className="Alert">{children}</div>
    </>
  );
}

function DeleteButton({ clickHandler }) {
  return (
    <Button
        setStyle={{ 
            'backgroundColor' : 'red', 
            'color' : 'white' 
        }}
      clickHandler={clickHandler}
    >
      Delete
    </Button>
  );
}

function DeleteWarningButton({ alertHead, alertMsg, deleteFunc }) {
  return (
    <div
      style={{
        'backgroundColor' : 'white',
        'color' : 'lightsalmon',
        'width' : '80%',
        'alignSelf' : 'center',
        'padding' : '1rem',
        'margin' : '0.5rem',
        'borderRadius' : '25px'
      }}
    >
      <Alert>
        <h4>{alertHead}</h4>
        <p>{alertMsg}</p>
      </Alert>
      <DeleteButton clickHandler={deleteFunc} />
    </div>
  );
}

export default DeleteWarningButton;
