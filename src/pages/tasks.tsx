import { selectTasks, updateFilter } from "@/app/features/task/taskSlice";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAppDispatch } from "@/hook";

import { AddTaskModal } from "@/modules/addTaskModal";
import TaskCard from "@/modules/taskCard";

import { useSelector } from "react-redux"



const Tasks = () => {
    const tasks = useSelector(selectTasks); 
    const dispatch = useAppDispatch();
    console.log(tasks);
    return (
        <div>
            <div className="flex justify-end items-center gap-5">
                <h1 className="mr-auto">Tasks</h1>

                <Tabs defaultValue="all">
                    
                <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger onClick={() => dispatch(updateFilter("all"))} value="all">All</TabsTrigger>
        <TabsTrigger onClick={() => dispatch(updateFilter("high"))}value="low">Low</TabsTrigger>
        <TabsTrigger onClick={() => dispatch(updateFilter("medium"))}value="medium">Medium</TabsTrigger>
        <TabsTrigger onClick={() => dispatch(updateFilter("low"))}value="high">High</TabsTrigger>
      </TabsList>   
</Tabs>

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