import React from 'react'

interface Props {
    work: string;
    setWork: React.Dispatch<React.SetStateAction<string>>;
    createWork(e: React.FormEvent): void;
}

const WorkFormComponent = ({work,setWork,createWork}: Props) => {
  return (
      <div className='work-form'>
        <form onSubmit={(e) => createWork(e)}>
          <input placeholder='Enter a task' className='input-work-title' type="input" value={work} onChange={(e)=>setWork(e.target.value)} />
          <button type='submit' className='btn-create-work'><i className='material-icons'>check</i></button>
        </form>
      </div>
  )
}

export default WorkFormComponent