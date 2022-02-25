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
        {
          workList?.map((work: Work) => (
            <WorkComponent work={work} key={work.workId} workList={workList} setWorkList={setWorkList} />  
          ))
        }
  </div>
  )

  

  // return (
  //   <div className='work-list-container'>
  //       {
  //         workList.map((work: Work) => {
  //           return <WorkComponent work={work} key={Date.now()} workList={workList} setWorkList={setWorkList} />  
  //        })
  //       }
  // </div>
  // )


}

export default WorkListComponent