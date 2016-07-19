import {Injectable} from '@angular/core'
import {Task} from '../shared';

@Injectable()
export class TaskService {
    public taskStore: Task[] = [];
    constructor() {
        const tasks = [
            {
                name: "Code an HTML Table",
                deadline: "Jun 23 2015",
                queued: false,
                pomodorosRequired: 1
            },
            {
                name: "Task 2",
                deadline: "Jun 24 2015",
                queued: false,
                pomodorosRequired: 2
            },
            {
                name: "Task 3",
                deadline: "Jun 25 2015",
                queued: false,
                pomodorosRequired: 1
            },
            {
                name: "Task 4",
                deadline: "Jun 26 2015",
                queued: false,
                pomodorosRequired: 3
            }
        ];

        this.taskStore = tasks.map(task => {
            return {
                name: task.name,
                deadline: new Date(task.deadline),
                queued: task.queued,
                pomodorosRequired: task.pomodorosRequired
            };
        });
    }
}