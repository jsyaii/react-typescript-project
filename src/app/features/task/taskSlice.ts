import { RootState } from '@/app/store';
import { ITask } from '@/types';
import { createSlice } from '@reduxjs/toolkit'
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
            priority: "High",
    
    
        },
        {
            id: "asdfasdfasar",
            title: "Init github repo",
            description: "create home page, and routing",
            dueDate: "2025-11",
            isCompleted: false,
            priority: "Low",
    
    
        },
        {
            id: "asdfasdfasar",
            title: "Init github working",
            description: "create home page, and routing",
            dueDate: "2025-11",
            isCompleted: false,
            priority: "Medium",
    
    
        },
        
    ],
         filter: "all",
};
const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
    
    },
});

export const selectTasks = (state: RootState) => {
    return state.todo.tasks;

}; 
export const selectFilter = (state: RootState) => {
    return state.todo.filter;

};





export default taskSlice.reducer