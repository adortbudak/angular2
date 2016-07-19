import {Component, Input} from "@angular/core";
import {Task} from "../shared/shared";

@Component({
    selector: "pomodoro-task-icons",
    template: `
        <img *ngFor="let icon of icons" src="/assets/img/pomodoro.jpeg" width="50"/>
    `,
})

export default class TaskIconsComponent {
    @Input() icons: Object[] = [];    
    @Input() task: Task;
}
