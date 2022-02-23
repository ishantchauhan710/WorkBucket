import React from 'react'

const WorkFormComponent = () => {
  return (
      <div className='work-form'>
        <form>
          <input placeholder='Enter a task' className='input-work-title' type="text" />
          <button className='btn-create-work'><i className='material-icons'>check</i></button>
        </form>
      </div>
  )
}

export default WorkFormComponent