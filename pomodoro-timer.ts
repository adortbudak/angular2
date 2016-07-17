import {Component} from '@angular/core';
import {bootstrap} from '@angular/platform-browser-dynamic';
 

@Component({
    selector: 'pomodore-timer',
    template: `
        <h1> {{minutes}}:{{seconds}} </h1>
    `
})

/**
 * PomodoroTimerComponent
 */
class PomodoroTimerComponent {
    minutes: number;
    seconds: number;
    constructor() {
        this.minutes = 24;
        this.seconds = 59;
    }
}

bootstrap(PomodoroTimerComponent);
