import { Button } from "@/components/ui/button"
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
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { DialogDescription } from "@radix-ui/react-dialog"
import { useForm } from "react-hook-form"


export function AddTaskModal() {

//     export function AddTaskModal() {

    //         const form = useForm();
    
    // }
    
    const form = useForm();
    const onSubmit = (data) => {
        console.log(data);
    }

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
    name="dueDate"
    render={({ field }) => (
        <FormItem>
           <FormLabel>Due date</FormLabel>
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
            <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
          <SelectItem value="grapes">Grapes</SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
            </FormControl>
            </FormItem>
        )}
        />

<DialogFooter>
          <Button type="submit">Save changes</Button>
                      </DialogFooter>
                      </form>
                  </Form>  
      </DialogContent>
    </Dialog>
  )
}
