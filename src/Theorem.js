import Card from '@mui/material/Card';

const customCardStyle = {
  backgroundColor: 'rgb(100, 100, 120)',
  color: 'white',
  padding: '10px',
  margin: '5px 0px 5px 0px',
}

const headlineStyle = {
  fontSize: '30px',
  backgroundColor: 'rgb(10, 10, 50)',
  width: '9%',
  padding: '2px',
  textAlign: 'center',
  borderRadius: '5px',
}

const bodyStyle = {
  fontSize: '22px',
  padding: '20px',
}

export const TheoremTemplate = props => {
  const { headline, sentence } = props;

  return (
    <Card style={customCardStyle}>
      <div style={headlineStyle}>{headline}</div>
      <div style={bodyStyle}>
        {sentence}
      </div>
    </Card>
  );
}
