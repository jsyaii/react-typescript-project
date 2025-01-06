import { RootState } from '@/app/store';
import { ITask } from '@/types';
import { createSlice, PayloadAction, nanoid } from '@reduxjs/toolkit'


interface InitialState{

    tasks: ITask[];
    filter: "all" | "high" | "medium" | "Low";
};

const initialState: InitialState =
     {
    tasks: [
        {
            id: "asdfasdfasar",
            title: "Initialize frontend",
            description: "create home page, and routing",
            dueDate: "2025-11",
            isCompleted: false,
            priority: "high",
    
    
        },
        // {
        //     id: "asdfasdfasar",
        //     title: "Init github repo",
        //     description: "create home page, and routing",
        //     dueDate: "2025-11",
        //     isCompleted: false,
        //     priority: "Low",
    
    
        // },
        // {
        //     id: "asdfasdfasar",
        //     title: "Init github working",
        //     description: "create home page, and routing",
        //     dueDate: "2025-11",
        //     isCompleted: false,
        //     priority: "Medium",
    
    
        // },
        
    ],
         filter: "all",
};


type DraftTask = Pick<ITask, "title" | "description" | "dueDate" | "priority">;
const createTask = (taskData: DraftTask): ITask => {
    return { id: nanoid(), isCompleted: false, ...taskData };
};

const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<DraftTask>) => {
            const taskData = createTask(action.payload);
            state.tasks.push(taskData);
            },
        toggleCompleteState: (state, action: PayloadAction<string>) => {
            console.log(action);
            state.tasks.forEach((task) =>
                task.id == action.payload ? (task.isCompleted = !task.isCompleted) : task);
},

        deleteTask: (state, action: PayloadAction<string>) => {
            state.tasks = state.tasks.filter((task) => task.id != action.payload);
        },  
  
        updateFilter: (state, action: PayloadAction<"all" |"low" | "medium" | "high">) => {
            state.filter = action.payload;
        },



        },
    });

export const selectTasks = (state: RootState)  => { 
    return state.todo.tasks;

}; 
export const selectFilter = (state: RootState) => {
    return state.todo.filter;

};



export const { addTask, toggleCompleteState,deleteTask,updateFilter } = taskSlice.actions;

export default taskSlice.reducer