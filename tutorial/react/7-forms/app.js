import React from 'react';
import ReactDOM from 'react-dom';
import ScottsForm from './scottsform';

function App() {
  return (
    <div>
      <ScottsForm title="Scott's Form" />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('test')
);
