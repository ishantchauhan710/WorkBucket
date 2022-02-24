import React from 'react'
import { Work } from '../models/Work'
import WorkComponent from './WorkComponent'

interface Props {
    workList: Work[];
    setWorkList: React.Dispatch<React.SetStateAction<Work[]>>;
}

const WorkListComponent = ({workList,setWorkList}: Props) => {
  return (
    <div className='work-list-container'>
        {
            workList.map(work => {
                <WorkComponent work={work} key={work.workId} workList={workList} setWorkList={setWorkList} />
            })
        }
    </div>
  )
}

export default WorkListComponent