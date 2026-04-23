import AddTask from "@/components/AddTask";
import TaskCard from "@/components/TaskCard";
import { getTasks } from "@/lib/tasks";

const TasksPage =async () => {
    const tasks = await getTasks();
    console.log(tasks);
    return (
        <div>
            <h2 className="text-2xl text-center">TASKS : {tasks.length}</h2>
            <AddTask/>
            <div className="grid md:grid-cols-2 gap-4">
                {tasks.map(task => <TaskCard key={task.id} task={task}></TaskCard>)}
            </div>
        </div>
    );
};

export default TasksPage;