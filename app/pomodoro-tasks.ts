import {Component,Input} from '@angular/core';
import {I18nPluralPipe,NgLocalization} from '@angular/common';
import {FormattedTimePipe} from '../shared/pipes/formatted-time.pipe';
import {Task} from '../shared/shared';
import {TaskTooltipDirective} from './pomodoro-task.directive';
import {TaskService} from '../shared/services/task.service';
import {TaskIconsComponent} from './pomodoro.taskIcons.component';


@Component({
    selector: 'pomodoro-tasks',
    styleUrls: ['./app/pomodoro-tasks.css'],
    templateUrl: './app/pomodoro-tasks.html',
    providers:[NgLocalization],
    directives:[TaskIconsComponent,TaskTooltipDirective],
    pipes:[FormattedTimePipe]
})
export class TasksComponent{
    today: Date;
    tasks: Task[];
    task: Task;
    queuedPomodoros: number;
    queuedPomodorosIcons = [];
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
        this.task = task;
        task.queued = !task.queued;
        this.updateQueuedPomodoros();
    }

    private updateQueuedPomodoros(){
        this.queuedPomodoros = this.tasks
            .filter((task:Task) => task.queued)
            .reduce((pomodoros: number,queuedTask:Task) => {
                return pomodoros + queuedTask.pomodorosRequired;
            },0);
        this.queuedPomodorosIcons = Array(this.queuedPomodoros).fill(0,this.queuedPomodoros -1);
    }
}

