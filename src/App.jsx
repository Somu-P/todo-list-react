import { useState } from 'react'
import './App.css'
import TaskItem from './Components/TaskItem'
function App() {
  const [newtask,setnewtask]=useState("")
  const [myTasks,setmyTasks]=useState(["Reading Books","DSA","Designing"])
  const [completedTasks,setcompletedTasks]=useState([])
  function handleChange(e){
  let newvalue=e.target.value;
  setnewtask(newvalue);
  }



  function addTask(){
    setmyTasks(prev=>[...prev,newtask])
    setnewtask("")
  }

  function deleteTask(taskname){
    let afterDeletionTasks=myTasks.filter(x=>x!=taskname)
    setmyTasks(afterDeletionTasks)

  }
  function completedTask(taskname){
  let afterCompletionTasks=myTasks.filter(x=>x==taskname)
  let afterFiltering=myTasks.filter(x=>x!=taskname)
    setmyTasks(afterFiltering)
  setcompletedTasks(prev=>[...prev,afterCompletionTasks[0]])
  console.log(completedTasks)

  }
  return (
   <div className='main-content d-flex justify-content-center align-items-center'>
    <div className='to-do-content'>
     <h2 className='p-2'>My To-do-List</h2>
     <div className='to-do-list-input-main-div'>
      <input type="text" className="form-control to-do-list-input" id="floatingInput" placeholder="Add New task" onChange={(e)=>{
        handleChange(e)
      }} value={newtask}/>
      <button className='btn  btn-primary add-btn' onClick={()=>{addTask()}} >+</button>
     </div>
     <h4 className='p-2'>To be Completed</h4>
     <ul className='tasks mt-3'>
      {
        myTasks.map((task,index)=>(
         <TaskItem Task={task} key={index} deleteTask={deleteTask} completedTask={completedTask} isCompleted={false}/>
        ))
      }

     </ul>
     <h4 className='p-2'>Completed tasks</h4>
     <ul className='tasks mt-3'>
      {
        completedTasks.map((task,index)=>(
         <TaskItem Task={task} key={index} isCompleted={true}/>
        ))
      }

     </ul>
    </div>
   </div>
  )
}

export default App
