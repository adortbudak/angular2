import {Component,Input,Pipe,PipeTransform,Directive,OnInit,HostListener} from '@angular/core';
import {bootstrap} from '@angular/platform-browser-dynamic';

interface Task {
    name: string;
    deadline: Date;
    queued: boolean;
    pomodorosRequired: number;
}

/**
 * TaskService
 */
class TaskService {
    public taskStore: Array<Task>= [];
    constructor() {
        const tasks = [
            {
                name: "Code an HTML Table",
                deadline: "Jun 23 2015",
                pomodorosRequired: 1
            },
            {
                name: "Task 2",
                deadline: "Jun 24 2015",
                pomodorosRequired: 2
            },
            {
                name: "Task 3",
                deadline: "Jun 25 2015",
                pomodorosRequired: 1
            },
            {
                name: "Task 4",
                deadline: "Jun 26 2015",
                pomodorosRequired: 3
            }
        ];

        this.taskStore = tasks.map(task => {
            return {
                name: task.name,
                deadline: new Date(task.deadline),
                queued: false,
                pomodorosRequired: task.pomodorosRequired
            };
        });
    }
}

@Component({
    selector: 'pomodoro-tasks',
    styleUrls: ['./app/pomodoro-tasks.css'],
    templateUrl: './app/pomodoro-tasks.html'
})
class TasksComponent{
    today: Date;
    tasks: Task[];

    constructor(){
        const taskService: TaskService = new TaskService();
        this.tasks = taskService.taskStore;
        this.today = new Date();

    }

    toggleTask(task: Task){
        task.queued = !task.queued;
    }
}

bootstrap(TasksComponent);