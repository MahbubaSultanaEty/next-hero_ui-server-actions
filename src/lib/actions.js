'use server'

import { revalidatePath } from "next/cache";
import { postTask } from "./tasks";

export const CreateATask = async (formData) => {
'use server'
    //Method-01
    // const title = formData.get('title');
    // const description = formData.get('description');
    // const priority = formData.get('priority');
    // const status = formData.get('status');
    // const assignedTo = formData.get('assignedTo');

    // const newTask = { title, description, priority, status, assignedTo };

    // Method-2
    const newTask = Object.fromEntries(formData.entries())

    
    console.log('Add a task with a name : ', newTask);

    const res = await postTask(newTask);
    if (res.ok) {
        revalidatePath('/tasks')
    }
    return res;
}