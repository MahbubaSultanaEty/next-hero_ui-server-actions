
import AddTask from "@/components/AddTask";
import TaskCard from "@/components/TaskCard";
import { AddATask, CreateATask } from "@/lib/actions";
import { getTasks } from "@/lib/tasks";
import { Button } from "@heroui/react";
import Link from "next/link";

const TasksPage =async () => {
    const tasks = await getTasks();
    // console.log(tasks);
    return (
        <div>
            <h2 className="text-2xl text-center">TASKS : {tasks.length}</h2>
            <AddTask createATask={CreateATask} />
            <Link href='/tasks/new'>
            <Button variant="outline">Add new Task</Button>
            </Link>
            <div className="grid md:grid-cols-2 gap-4">
                {tasks.map(task => <TaskCard key={task.id} task={task}></TaskCard>)}
            </div>
        </div>
    );
};

export default TasksPage;