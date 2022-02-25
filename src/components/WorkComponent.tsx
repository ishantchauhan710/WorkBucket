import React from 'react'
import { Work } from '../models/Work'

interface Props {
    work: Work,
    workList: Work[];
    setWorkList: React.Dispatch<React.SetStateAction<Work[]>>;
}

const WorkComponent = ({work,workList,setWorkList}: Props) => {

    const completeWork = (workId: number) => {
        
    }

    const deleteWork = (workId: number) => { }

    const editWork = (workId: number) => { }

    

  return (
    <div className='work-item'>
        <form className='work-form-2'>
            <div className='work-title'>{work.workTitle}</div>
            <div className='work-buttons'>
                <button className='btn-work-action' onClick={()=>editWork(work.workId)}><i className='material-icons'>edit</i></button>
                <button className='btn-work-action' onClick={()=>deleteWork(work.workId)}><i className='material-icons'>delete</i></button>
                <button className='btn-work-action' onClick={()=>completeWork(work.workId)}><i className='material-icons'>check</i></button>
            </div>   
        </form>
    </div>
  )
}

export default WorkComponent