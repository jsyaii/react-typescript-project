import { selectTasks } from "@/app/features/task/taskSlice";
import { AddTaskModal } from "@/modules/addTaskModal";
import TaskCard from "@/modules/taskCard";
import { useSelector } from "react-redux"



const Tasks = () => {
    const tasks= useSelector(selectTasks); 
    console.log(tasks);
    return (
        <div>
            <div className="flex justify-between items-center">
                <h1>Tasks</h1>
                <AddTaskModal />
            </div>
        <div>Tasks
          {tasks.map((task) => (
             <TaskCard task={task} key={task.id}/>
         ))} 
          </div>    
      </div>
      
  )
}

export default Tasks