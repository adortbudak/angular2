import {Injectable} from "@angular/core";
import {Task} from "../shared";

@Injectable()
export class TaskService {
    public taskStore: Task[] = [];
    constructor() {
        const tasks = [
            {
                deadline: "Jun 23 2015",
                name: "Code an HTML Table",
                pomodorosRequired: 1,
                queued: false                
            },
            {
                deadline: "Jun 24 2015",
                name: "Task 2",
                pomodorosRequired: 2,
                queued: false
            },
            {
                deadline: "Jun 25 2015",
                name: "Task 3",
                pomodorosRequired: 1,
                queued: false
            },
            {
                deadline: "Jun 26 2015",
                name: "Task 4",
                pomodorosRequired: 3,
                queued: false           
            },
        ];

        this.taskStore = tasks.map(task => {
            return {
                deadline: new Date(task.deadline),
                name: task.name,
                 pomodorosRequired: task.pomodorosRequired,
                queued: task.queued               
            };
        });
    }
}
