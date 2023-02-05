const customProofStyle = {
  color: 'white',
  padding: '10px',
}

const outlineHeadline = {
  fontSize: '30px',
  backgroundColor: 'rgb(10, 10, 10)',
  width: '9%',
  padding: '2px',
  textAlign: 'center',
  borderRadius: '5px',
}

const theoremBodyStyle = {
  fontSize: '22px',
  padding: '20px',
}

const outlineTitleStyle = {
  fontSize: '26px',
  padding: '10px'
}

export const OutlineTemplate = props => {
  const { sentence, outlineTitle } = props;

  return (
    <div style={customProofStyle}>
      <div style={outlineHeadline}>概要</div>
      <div style={theoremBodyStyle}>
        <div style={outlineTitleStyle}>
          {outlineTitle}
        </div>
        {sentence}
      </div>
    </div>
  );
}
