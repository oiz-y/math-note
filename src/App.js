import './App.css';

import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Latex from 'react-latex';
import '@aws-amplify/ui-react/styles.css';
import "katex/dist/katex.min.css";

import { Flow } from './Flow';

const customPaperStyle = {
  backgroundColor: 'rgb(70, 75, 80)',
  color: 'white',
  fontFamily: 'Playfair Display, serif',
}

function App() {
  return (
    <div className="App">
      <Grid container spacing={1}>
        <Grid item xs={2}></Grid>
        <Grid item xs={8}>
          <Paper style={customPaperStyle} elevation={3}>
            <Flow />
          </Paper>
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>
    </div>
  );
}

export default App;
