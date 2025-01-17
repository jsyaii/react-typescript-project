import { addTask } from "@/app/features/task/taskSlice"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { useAppDispatch } from "@/hook"
import { cn } from "@/lib/utils"
import { ITask } from "@/types"
import { DialogDescription } from "@radix-ui/react-dialog"
import { formatDate } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"


export function AddTaskModal() {

//     export function AddTaskModal() {

    //         const form = useForm();
    
    // }
    
  const form = useForm();
  

  const dispatch = useAppDispatch();
  


  const onSubmit: SubmitHandler<FieldValues> = (data) => {
      
    dispatch(addTask(data as ITask));
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Add Task</Button>
      </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
              <DialogDescription>Fill up this form to add task</DialogDescription>
        <DialogHeader>
          <DialogTitle>Add Task</DialogTitle>
          
              </DialogHeader>



    <Form {...form}> 
                  
                  <form onSubmit={form.handleSubmit(onSubmit)}>
                  <FormField
    control={form.control}
    name="title"
    render={({ field }) => (
        <FormItem>
            <FormLabel>Title</FormLabel>
            <FormControl>
            <Input {...field} value={field.value || ""} />
            </FormControl>
            </FormItem>
        )}
            />
            
                  <FormField
    control={form.control}
    name="description"
    render={({ field }) => (
        <FormItem>
           <FormLabel>Description</FormLabel>
            <FormControl>
            <Textarea {...field} value={field.value || ""} />
            </FormControl>
            </FormItem>
        )}
        />
            
                  <FormField
    control={form.control}
    name="priority"
    render={({ field }) => (
        <FormItem>
           <FormLabel>Priority</FormLabel>
            
        <FormControl>

          <Select
            onValueChange={field.onChange}
            defaultValue={field.value}
          >
            
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="high">high</SelectItem>
          <SelectItem value="medium">medium</SelectItem>
          <SelectItem value="low">low</SelectItem>
          
        </SelectGroup>
      </SelectContent>
    </Select>
            </FormControl>
            </FormItem>
        )}
            />




             <FormField
          control={form.control}
          name="due date"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Date of birth</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        " pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        formatDate(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    // disabled={(date) =>
                    //   date > new Date() || date < new Date("1900-01-01")
                    // }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
             
            </FormItem>
          )}
        />

<DialogFooter>
          <Button className="mt-5" type="submit">Save changes</Button>
                      </DialogFooter>
                      </form>
                  </Form>  
      </DialogContent>
    </Dialog>
  )
}
