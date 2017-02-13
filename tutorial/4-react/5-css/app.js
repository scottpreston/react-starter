import React from 'react';
import ReactDOM from 'react-dom';
import Welcome from './welcome';

function App() {
  return (
    <div>
      <Welcome name="Scott" />
      <Welcome name="Tim" />
      <Welcome name="Josh" />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('test')
);
