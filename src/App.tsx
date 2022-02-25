import React, { useState } from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import './App.css';
import WorkFormComponent from './components/WorkFormComponent';
import WorkListComponent from './components/WorkListComponent';
import { Work } from './models/Work';

const App: React.FC = () => {

  const [work,setWork] = useState<string>("");
  const [workList,setWorkList] = useState<Work[]>([]);

  const [completedWorkList,setCompletedWorkList] = useState<Work[]>([]);


  const createWork = (e: React.FormEvent) => {
    e.preventDefault();
    if(work) {
      setWorkList([...workList,{workId: Date.now(), workTitle: work, workIsCompleted: false}]);
    }
    setWork("");
  }

  const onDragEnd = (result: DropResult) => {
    const {source,destination} = result;
    if(!destination) {
      return;
    }

    if((destination?.droppableId===source.droppableId && destination.index===source.index)) {
      return;
    }

    let workToMove;
    let bucket1 = workList;
    let bucket2 = completedWorkList;

    if(source.droppableId==='bucket1') {
      workToMove = bucket1[source.index];
      workToMove.workIsCompleted = false;
      bucket1.splice(source.index,1);
    } else {
      workToMove = bucket2[source.index];
      workToMove.workIsCompleted = true;
      bucket2.splice(source.index,1);
    }

    if(destination.droppableId==='bucket1') {
      workToMove.workIsCompleted = false;
      bucket1.splice(destination.index,0,workToMove);
    } else {
      workToMove.workIsCompleted = true;
      bucket2.splice(destination.index,0,workToMove);
    }

    setWorkList(bucket1);
    setCompletedWorkList(bucket2);

  }

  return (
    <DragDropContext onDragEnd={(result)=>{onDragEnd(result)}}>
      <div className="App">
        <div className="header-container">
          <div className='header'>Work Bucket</div>
          <WorkFormComponent work={work} setWork={setWork} createWork={createWork}/>
        </div>
        <WorkListComponent workList={workList} setWorkList={setWorkList} completedWorkList={completedWorkList} setCompletedWorkList={setCompletedWorkList} />
      </div>
    </DragDropContext>
  );
}

export default App;
