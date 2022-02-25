import React from 'react'
import { Work } from '../models/Work'
import WorkComponent from './WorkComponent'

interface Props {
    workList: Work[];
    setWorkList: React.Dispatch<React.SetStateAction<Work[]>>;
}

const WorkListComponent: React.FC<Props> = ({workList,setWorkList}) => {

  return (
    <div className='work-bucket-container'>

      <div className='work-list-container1'>
        <div className='bucket1-container'>
          <span className='bucket1-title'>Bucket 1</span>
          <button className='btn-edit-bucket1-title'><i className='material-icons'>edit</i></button>
        </div>
          {
            workList?.map((work: Work) => (
              <WorkComponent work={work} key={work.workId} workList={workList} setWorkList={setWorkList} />  
            ))
          }
      </div>

      
      <div className='work-list-container2'>
        <div className='bucket1-container'>
          <span className='bucket1-title'>Bucket 2</span>
          <button className='btn-edit-bucket2-title'><i className='material-icons'>edit</i></button>
        </div>
          {
            workList?.map((work: Work) => (
              <WorkComponent work={work} key={work.workId} workList={workList} setWorkList={setWorkList} />  
            ))
          }
      </div>

      


    </div>
  )

}

export default WorkListComponent