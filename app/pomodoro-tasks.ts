import {Component,Input,Pipe,PipeTransform,Directive,OnInit,HostListener} from '@angular/core';
import {I18nPluralPipe,NgLocalization} from '@angular/common';


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
                queued: true,
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

@Component({
    selector:'pomodoro-task-icons',
    template:`
        <img *ngFor="let icon of icons" src="/assets/img/pomodoro.jpeg" width="50"/>
    `
})

class TaskIconsComponent implements OnInit{
    @Input() task: Task;
    icons: Object[] = [];
    ngOnInit(){
        console.log(this.task.queued);
        if (this.task.queued){
            this.icons.length = this.task.pomodorosRequired;
        }
        else{
            this.icons.length = 0;
        }
        this.icons.fill({name: this.task.deadline});
    }
}

@Component({
    selector: 'pomodoro-tasks',
    styleUrls: ['./app/pomodoro-tasks.css'],
    templateUrl: './app/pomodoro-tasks.html',
    providers:[NgLocalization],
    directives:[TaskIconsComponent]
})
export class TasksComponent{
    today: Date;
    tasks: Task[];
    queuedPomodoros: number;
    queueHeaderMapping: any = {
        '=0': 'No pomodoros',
        '=1': 'One pomodoro',
        'other': '# pomodoros'
    };

    constructor(){
        const taskService: TaskService = new TaskService();
        this.tasks = taskService.taskStore;
        this.today = new Date();
        this.updateQueuedPomodoros();

    }

    toggleTask(task: Task){
        task.queued = !task.queued;
        this.updateQueuedPomodoros();
    }

    private updateQueuedPomodoros(){
        this.queuedPomodoros = this.tasks
            .filter((task:Task) => task.queued)
            .reduce((pomodoros: number,queuedTask:Task) => {
                return pomodoros + queuedTask.pomodorosRequired;
            },0);
    }
}

