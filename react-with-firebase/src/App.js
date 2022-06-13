import React from 'react';
import Button from '@mui/material/Button';
import firebaseInitialize from "./firebase";

function App() {
  console.log(firebaseInitialize);
  return (
    <div className="App">
      <Button variant='contained'>Hello World</Button>
    </div>
  );
}

export default App;
