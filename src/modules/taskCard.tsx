import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils';
import { ITask } from '@/types'
import { Checkbox } from "@/components/ui/checkbox"



import { Trash2 } from 'lucide-react'
import { useAppDispatch } from '@/hook';
import { deleteTask, toggleCompleteState } from '@/app/features/task/taskSlice';

interface IProps {
    task: ITask;
}

const TaskCard =({ task }: IProps) =>{
    const dispatch = useAppDispatch(); 

    return (
        <div className='border px-5 py-3 rounded-md'>
            <div className='flex justify-between items-center'>
                <div className='flex gap-2 items-center'>
                    <div
                        className={cn("size-3 rounded-full", {
                            "bg-green-500": task.priority == "high",
                            "bg-yellow-500": task.priority == "medium",
                            "bg-red-500": task.priority == "low"
                        })} >
                    </div>
                    <h1>{task.title}</h1>
                </div>
                <div className='flex gap-3 items-center'>
                    <Button onClick={() => dispatch(deleteTask(task.id))}
                        variant="Link" className='p-0 text-red-500'>
                        <Trash2 />
                    </Button>
                    <Checkbox checked={task.isCompleted}
                        onClick={() => dispatch(toggleCompleteState(task.id))} />
                   

                  
                    

                  
                </div>
             
            </div>
            <p className='mt-5'>{task.description}</p>


        </div>
    );
}

export default TaskCard;