import React, { useState } from 'react';
import './App.css';
import WorkComponent from './components/WorkComponent';
import WorkFormComponent from './components/WorkFormComponent';
import { Work } from './models/Work';

const App: React.FC = () => {

  const [work,setWork] = useState<string>("");
  const [workList,setWorkList] = useState<Work[]>([]);

  const createWork = (e: React.FormEvent) => {
    e.preventDefault();
    if(work) {
      setWorkList([...workList,{workId: Date.now(), workTitle: work, workIsCompleted: false}]);
    }
    console.log(work);
  }

  return (
    <div className="App">
      <div className="header-container">
        <div className='header'>Work Bucket</div>
        <WorkFormComponent work={work} setWork={setWork} createWork={createWork}/>
      </div>
       <WorkComponent />
    </div>
  );
}

export default App;
