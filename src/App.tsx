import React from 'react';
import './App.css';
import WorkFormComponent from './components/WorkFormComponent';

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="header-container">
        <div className='header'>Work Bucket</div>
        <WorkFormComponent />
      </div>
    </div>
  );
}

export default App;
