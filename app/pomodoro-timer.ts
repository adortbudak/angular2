import {Component} from '@angular/core';
import {bootstrap} from '@angular/platform-browser-dynamic';
 

@Component({
    selector: 'pomodore-timer',
    template: `
        <div class="text-center">
        <h1> {{minutes}}:{{seconds | number: '2.0'}} </h1>
        <p>
            <button (click)="togglePause()" class="btn btn-danger">
             {{buttonLabel}}
            </button>
        </p>
        </div>
    `
})

/**
 * PomodoroTimerComponent
 */
class PomodoroTimerComponent {
    minutes: number;
    seconds: number;
    buttonLabel: string;
    isPaused: boolean;
    constructor() {
        this.resetPomodoro();
        setInterval(()=> this.tick(),1000);
    }

    tick(){
        if (!this.isPaused){
            this.buttonLabel = 'Pause';
            if (--this.seconds < 0){
            this.seconds = 59;
            if (--this.minutes < 0)
            {
                this.resetPomodoro();
            }
        }
        }
        
    }

    resetPomodoro(){
        this.minutes = 24;
        this.seconds = 59;
        this.buttonLabel = 'Start';
        this.togglePause();
    }

    togglePause(){
        this.isPaused = !this.isPaused;

        if (this.minutes < 24 || this.seconds < 59){
            this.buttonLabel = this.isPaused ? 'Resume' : 'Pause';
        }
    }
}

bootstrap(PomodoroTimerComponent);
