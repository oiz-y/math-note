const customProofStyle = {
  color: 'white',
  padding: '10px',
}

const proofHeadline = {
  fontSize: '30px',
  backgroundColor: 'rgb(10, 70, 70)',
  width: '9%',
  padding: '2px',
  textAlign: 'center',
  borderRadius: '5px',
}

const proofBodyStyle = {
  padding: '20px'
}

export const ProofTemplate = props => {
  const { sentence } = props;

  return (
    <div style={customProofStyle}>
      <div style={proofHeadline}>証明</div>
      <div style={proofBodyStyle}>
        {sentence}
      </div>
    </div>
  );
}
