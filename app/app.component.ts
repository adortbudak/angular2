import { Component } from "@angular/core";
import { TASKS_DIRECTIVES, TasksComponent, TaskEditorComponent} from "./tasks/tasks";
import { TIMER_DIRECTIVES, TimerWidgetComponent, TimerComponent} from "./timer/timer";
import { SHARED_PROVIDERS } from "./shared/shared";
import { HTTP_PROVIDERS } from "@angular/http";
import { ROUTER_PROVIDERS, RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';

@Component({
    selector: "pomodoro-app",
    directives: [TASKS_DIRECTIVES, TIMER_DIRECTIVES, ROUTER_DIRECTIVES],
    providers: [SHARED_PROVIDERS, HTTP_PROVIDERS, ROUTER_PROVIDERS],
    templateUrl: 'app/app.component.html',
    styles: [`
        .router-link-active {
            font-weigth: bold;
            border-bottom: 2px #d9534f solid;
        }
    `]
})

@RouteConfig([
    {
        path: '',
        name: 'TasksComponent',
        component: TasksComponent },
        {
        path: 'task/editor',
        name: 'TaskEditorComponent',
        component: TaskEditorComponent },
        {
        path: 'timer/...',
        name: 'TimerComponent',
        component: TimerComponent },
])
export class AppComponent {}

