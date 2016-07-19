import { Component } from "@angular/core";
import { TASKS_DIRECTIVES} from "./tasks/tasks";
import { TIMER_DIRECTIVES} from './timer/timer';
import { SHARED_PROVIDERS } from "./shared/shared";

@Component({
    selector: "pomodoro-app",
    directives: [TASKS_DIRECTIVES],
    providers: [SHARED_PROVIDERS],    
    template: `
        <nav class="navbar navbar-default navbar-static-top">
            <div class="container">
                <div class="navbar-header">
                    <strong class="navbar-brand">My Pomodoro App</strong>
                </div>
            </div>
        </nav>           
        <pomodoro-timer-widget></pomodoro-timer-widget> 
        <pomodoro-tasks></pomodoro-tasks>
    `
})
export class AppComponent {}

