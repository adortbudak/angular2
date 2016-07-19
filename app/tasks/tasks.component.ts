import {Component, OnInit} from '@angular/core';
import TaskTooltipDirective from './task-tooltip.directive';
import TaskIconsComponent from './task-icons.component';
import {TaskService, SettingsService, Task, SHARED_PIPES} from "../shared/shared";


@Component({
    selector: "pomodoro-tasks",
    styleUrls: ["./app/tasks/tasks.component.css"],
    templateUrl: "./app/tasks/tasks.component.html",
    directives: [TaskIconsComponent, TaskTooltipDirective],
    pipes: [SHARED_PIPES]
})
export default class TasksComponent implements OnInit {
    today: Date;
    tasks: Task[];
    task: Task;
    queuedPomodoros: number;
    queuedPomodorosIcons = [];
    queueHeaderMapping: any;
    timerMinutes: number;
  

    constructor(private taskService:TaskService,
        private settingsService: SettingsService) {
        
        this.tasks = this.taskService.taskStore;
        this.today = new Date();
        this.queueHeaderMapping = settingsService.pluralsMap.tasks;
        this.timerMinutes = settingsService.timerMinutes;        
    }

    ngOnInit() {
        this.updateQueuedPomodoros();
    }

    toggleTask(task: Task) {
        this.task = task;
        task.queued = !task.queued;
        this.updateQueuedPomodoros();
    }

    private updateQueuedPomodoros() {
        this.queuedPomodoros = this.tasks
            .filter((task: Task) => task.queued)
            .reduce((pomodoros: number, queuedTask: Task) => {
                return pomodoros + queuedTask.pomodorosRequired;
            }, 0);
        this.queuedPomodorosIcons = Array(this.queuedPomodoros).fill(0, this.queuedPomodoros - 1);
    }
}

