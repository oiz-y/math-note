import Card from '@mui/material/Card';
import Latex from 'react-latex';

const customCardStyle = {
  backgroundColor: 'rgb(103, 137, 131)',
  color: 'white',
  padding: '10px',
  margin: '5px 0px 5px 0px',
}

const headlineStyle = {
  fontSize: '30px',
  backgroundColor: 'rgb(24, 70, 100)',
  width: '9%',
  padding: '2px',
  textAlign: 'center',
  borderRadius: '5px',
}

const bodyStyle = {
  fontSize: '22px',
  padding: '20px',
}

export const DefinitionTemplate = props => {
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
