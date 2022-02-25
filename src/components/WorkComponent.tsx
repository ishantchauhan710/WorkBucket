import React, { useState } from 'react'
import { Draggable } from 'react-beautiful-dnd';
import { Work } from '../models/Work'

interface Props {
    work: Work,
    workList: Work[];
    setWorkList: React.Dispatch<React.SetStateAction<Work[]>>;
    index: number;
    completedWorkList: Work[];
    setCompletedWorkList: React.Dispatch<React.SetStateAction<Work[]>>;
}


const WorkComponent = ({work,workList,setWorkList,index,completedWorkList,setCompletedWorkList}: Props) => {


    const [editMode,setEditMode] = useState<boolean>(false);
    const [editWorkValue,setEditWorkValue] = useState<string>(work.workTitle);

    const completeWork = (e: React.FormEvent,workElt: Work) => {
        if(editMode) {
            editWork(e,workElt.workId)
        } else {
            if(work.workIsCompleted) {


                workElt.workIsCompleted = false

                let workCompletedList = completedWorkList
                let workInCompletedList = workList

                let workCompletedListUpdated = workCompletedList.filter((workElement) => workElement.workId!==workElt.workId)
                workInCompletedList.push(workElt)

                setCompletedWorkList(workCompletedListUpdated)

                  
            } else {

                workElt.workIsCompleted = true

                let workCompletedList = completedWorkList
                let workInCompletedList = workList

                let workIncompletedListUpdated = workInCompletedList.filter((workElement) => workElement.workId!==workElt.workId)
                workCompletedList.push(workElt)

                setWorkList(workIncompletedListUpdated)
            }
        }
    }

    const deleteWork = (workElt: Work) => {
        if(work.workIsCompleted) {
            setCompletedWorkList(completedWorkList.filter((workItem)=>workItem.workId!==workElt.workId));
        } else {
            setWorkList(workList.filter((workItem)=>workItem.workId!==workElt.workId));
        }
     }

    const editWork = (e: React.FormEvent,workId: number) => {
        e.preventDefault();
        if(work.workIsCompleted) {
            setCompletedWorkList(
                completedWorkList.map((workItem) => (workItem.workId === workId ? { ...work, workTitle: editWorkValue } : workItem))
              );
         } else {
            setWorkList(
                workList.map((workItem) => (workItem.workId === workId ? { ...work, workTitle: editWorkValue } : workItem))
              );
         }
        setEditMode(false);
     }

 

    

  return (
   <Draggable draggableId={work.workId.toString()} index={index}>
       {(provided)=>(
            <div className='work-item' {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
            <form id='work-form-2' className='work-form-2' onSubmit={(e)=>editWork(e,work.workId)}>
                
                {
                    editMode?(
                        <input type="input" value={editWorkValue} onChange={(e)=>setEditWorkValue(e.target.value)} className='input-edit-work' />
                    ):(
                        <div className={work.workIsCompleted?'work-title pending':'work-title'}>{work.workTitle}</div>
                    )
                }
                
                <div className='work-buttons'>
                    <button id='btn-edit' type='button' className={editMode?'btn-work-action-edit-mode':'btn-work-action'} onClick={(e)=>{if(!editMode && !work.workIsCompleted) {setEditMode(!editMode)}}}><i className='material-icons'>edit</i></button>
                    <button type='button' className='btn-work-action' onClick={()=>deleteWork(work)}><i className='material-icons'>delete</i></button>
                    <button type='button' className='btn-work-action' onClick={(e)=>completeWork(e,work)}><i className='material-icons'>check</i></button>
                </div>   
            </form>
        </div>
       )}
   </Draggable>
  )
}

export default WorkComponent