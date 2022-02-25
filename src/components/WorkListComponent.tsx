import React from 'react'
import { Work } from '../models/Work'
import WorkComponent from './WorkComponent'

interface Props {
    workList: Work[];
    setWorkList: React.Dispatch<React.SetStateAction<Work[]>>;
}

const WorkListComponent: React.FC<Props> = ({workList,setWorkList}) => {

  return (
    <div className='work-list-container'>
      <div className='bucket-container'>
        <span className='bucket-title'>Bucket 1</span>
        <button className='btn-edit-bucket-title'><i className='material-icons'>edit</i></button>
      </div>
        {
          workList?.map((work: Work) => (
            <WorkComponent work={work} key={work.workId} workList={workList} setWorkList={setWorkList} />  
          ))
        }
  </div>
  )

}

export default WorkListComponent