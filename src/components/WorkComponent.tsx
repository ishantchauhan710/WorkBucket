import React from 'react'

const WorkComponent = () => {
  return (
    <div className='work-item'>
        <span className='work-title'>This is a work</span>
        <button className='btn-work-action'><i className='material-icons'>edit</i></button>
        <button className='btn-work-action'><i className='material-icons'>delete</i></button>
        <button className='btn-work-action'><i className='material-icons'>check</i></button>
    </div>
  )
}

export default WorkComponent