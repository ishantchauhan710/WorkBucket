import React, { useState } from 'react'
import { Droppable } from 'react-beautiful-dnd'
import { Work } from '../models/Work'
import WorkComponent from './WorkComponent'

interface Props {
    workList: Work[];
    setWorkList: React.Dispatch<React.SetStateAction<Work[]>>;
    completedWorkList: Work[];
    setCompletedWorkList: React.Dispatch<React.SetStateAction<Work[]>>;
}

const WorkListComponent: React.FC<Props> = ({workList,setWorkList,completedWorkList,setCompletedWorkList}) => {

  const [bucket1Name, setBucket1Name] = useState<string>('Bucket 1');
  const [bucket2Name, setBucket2Name] = useState<string>('Bucket 2');

  const [editBucket1NameMode, setEditBucket1NameMode] = useState<boolean>(false);
  const [editBucket2NameMode, setEditBucket2NameMode] = useState<boolean>(false);

  const toggleBucket2EditMode = () => {
    if(editBucket2NameMode) {
      setEditBucket2NameMode(false)
    } else {
      setEditBucket2NameMode(true)
    }
  }
  
  

  return (
    <div className='work-bucket-container'>

     <Droppable droppableId='bucket1'>
      { (provided,snapshot) => (
           <div ref={provided.innerRef} className={`work-list-container1 ${snapshot.isDraggingOver?'dragActive':''}`} {...provided.droppableProps}>
            <div className='bucket1-container'>
              <span className='bucket1-title'>{bucket1Name}</span>
              <button className='btn-edit-bucket1-title'><i className='material-icons'>edit</i></button>
            </div>
              {
                workList?.map((work: Work, index) => (
                  <WorkComponent index={index} work={work} key={work.workId} workList={workList} setWorkList={setWorkList} completedWorkList={completedWorkList} setCompletedWorkList={setCompletedWorkList} />  
                ))
                
              }

             {provided.placeholder}
         </div>
      )
      }     
     </Droppable>

     <Droppable droppableId='bucket2'>
      { (provided,snapshot) => (
           <div ref={provided.innerRef}  className={`work-list-container2 ${snapshot.isDraggingOver?'dragActive':''}`} {...provided.droppableProps}>
           <div className='bucket1-container'>
             <span className='bucket1-title'>{editBucket2NameMode?(<input type="input" value={bucket2Name} onChange={(e)=>setBucket2Name(e.target.value)} className='input-edit-work-bucket-title' />):(bucket2Name)}</span>
             <button onClick={() => toggleBucket2EditMode()} className='btn-edit-bucket2-title'><i className='material-icons'>{editBucket2NameMode?('check'):('edit')}</i></button>
           </div>
             {
               completedWorkList?.map((work: Work,index) => (
                 <WorkComponent index={index} work={work} key={work.workId} workList={workList} setWorkList={setCompletedWorkList} completedWorkList={completedWorkList} setCompletedWorkList={setCompletedWorkList} />  
               ))
             }
             {provided.placeholder}
         </div>
      )
      }     
     </Droppable>

    
    </div>
  )

}

export default WorkListComponent