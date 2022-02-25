import React, { useState } from 'react'
import { Work } from '../models/Work'

interface Props {
    work: Work,
    workList: Work[];
    setWorkList: React.Dispatch<React.SetStateAction<Work[]>>;
}


const WorkComponent = ({work,workList,setWorkList}: Props) => {


    const [editMode,setEditMode] = useState<boolean>(false);
    const [editWorkValue,setEditWorkValue] = useState<string>(work.workTitle);

    const completeWork = (e: React.FormEvent,workId: number) => {
        if(editMode) {
            editWork(e,workId)
        } else {
            setWorkList(
                workList.map((workItem) =>
                  workItem.workId === workId ? { ...work, workIsCompleted: !work.workIsCompleted } : work
                )
              );
        }
    }

    const deleteWork = (workId: number) => {
        setWorkList(workList.filter((workItem)=>workItem.workId!==workId));
     }

    const editWork = (e: React.FormEvent,workId: number) => {
        e.preventDefault();
        setWorkList(
          workList.map((workItem) => (workItem.workId === workId ? { ...work, workTitle: editWorkValue } : workItem))
        );
        setEditMode(false);
     }

 

    

  return (
    <div className='work-item'>
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
                <button type='button' className='btn-work-action' onClick={()=>deleteWork(work.workId)}><i className='material-icons'>delete</i></button>
                <button type='button' className='btn-work-action' onClick={(e)=>completeWork(e,work.workId)}><i className='material-icons'>check</i></button>
            </div>   
        </form>
    </div>
  )
}

export default WorkComponent