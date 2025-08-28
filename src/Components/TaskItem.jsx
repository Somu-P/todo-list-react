import React from "react";
function TaskItem({Task,deleteTask,completedTask,isCompleted}){
return (
    <>
          <li className='task d-flex justify-content-between '>
        {Task}
        <div className='update-task '>
            {
                !isCompleted &&(
                    <>
        <button className='btn btn-sm btn-success ' onClick={()=>{completedTask(Task)}}>Complete</button>
        <button className='btn btn-sm btn-danger' onClick={()=>{deleteTask(Task)}}>Delete</button>
                    </>
                )
            }

        </div>
        </li>
    </>
)
}
export default TaskItem
