import React, { useState } from 'react';
import './App.css';
import WorkFormComponent from './components/WorkFormComponent';
import WorkListComponent from './components/WorkListComponent';
import { Work } from './models/Work';

const App: React.FC = () => {

  const [work,setWork] = useState<string>("");
  const [workList,setWorkList] = useState<Work[]>([]);


  const createWork = (e: React.FormEvent) => {
    e.preventDefault();
    if(work) {
      setWorkList([...workList,{workId: Date.now(), workTitle: work, workIsCompleted: false}]);
    }
    setWork("");
  }

  return (
    <div className="App">
      <div className="header-container">
        <div className='header'>Work Bucket</div>
        <WorkFormComponent work={work} setWork={setWork} createWork={createWork}/>
      </div>
       <WorkListComponent workList={workList} setWorkList={setWorkList} />
    </div>
  );
}

export default App;
