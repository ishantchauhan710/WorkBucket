import React from 'react'
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

  return (
    <div className='work-bucket-container'>

     <Droppable droppableId='bucket1'>
      { (provided,snapshot) => (
           <div ref={provided.innerRef} className={`work-list-container1 ${snapshot.isDraggingOver?'dragActive':''}`} {...provided.droppableProps}>
            <div className='bucket1-container'>
              <span className='bucket1-title'>Bucket 1</span>
              <button className='btn-edit-bucket1-title'><i className='material-icons'>edit</i></button>
            </div>
              {
                workList?.map((work: Work, index) => (
                  <WorkComponent index={index} work={work} key={work.workId} workList={workList} setWorkList={setWorkList} />  
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
             <span className='bucket1-title'>Bucket 2</span>
             <button className='btn-edit-bucket2-title'><i className='material-icons'>edit</i></button>
           </div>
             {
               completedWorkList?.map((work: Work,index) => (
                 <WorkComponent index={index} work={work} key={work.workId} workList={workList} setWorkList={setCompletedWorkList} />  
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