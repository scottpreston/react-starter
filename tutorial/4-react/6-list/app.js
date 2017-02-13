import React from 'react';
import ReactDOM from 'react-dom';
import Welcome from './welcome';

function App() {
  let names = ['Scott', 'Time', 'Josh'];
  return (
    <div>
      <Welcome names={names} />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('test')
);
