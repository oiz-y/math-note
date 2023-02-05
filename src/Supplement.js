const customNoteStyle = {
  color: 'white',
  padding: '10px',
}

const noteHeadline = {
  fontSize: '30px',
  backgroundColor: 'rgb(10, 50, 10)',
  width: '9%',
  padding: '2px',
  textAlign: 'center',
  borderRadius: '5px',
}

const noteBodyStyle = {
  padding: '20px'
}

export const SupplementTemplate = props => {
  const { sentence } = props;

  return (
    <div style={customNoteStyle}>
      <div style={noteHeadline}>補足</div>
      <div style={noteBodyStyle}>
        {sentence}
      </div>
    </div>
  );
}