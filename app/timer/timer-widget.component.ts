import {Component, OnInit} from "@angular/core";
import {SettingsService} from "../shared/shared";

@Component({
    selector: "pomodoro-timer-widget",
    template: `
        <div class="text-center">
            <img src="/app/shared/assets/img/pomodoro.jpeg">
            <h1> {{minutes}}:{{seconds | number: '2.0'}} </h1>
            <p>
                <button (click)="togglePause()" class="btn btn-danger">
                    {{ buttonLabelKey | i18nSelect: buttonLabelsMap }}
                </button>
            </p>
        </div>    
    `,
})

export class TimerWidgetComponent
    implements OnInit {
    minutes: number;
    seconds: number;
    isPaused: boolean;
    buttonLabelKey: string;
    buttonLabelsMap: any;

    constructor(private settingsService: SettingsService) {
        this.buttonLabelsMap = settingsService.labelsMap.timer;
    }

    ngOnInit() {
        this.resetPomodoro();
        setInterval( () => this.tick(), 1000);
    }

    private resetPomodoro() {
        this.isPaused = true;
        this.minutes = this.settingsService.timerMinutes - 1;
        this.seconds = 59;
        this.buttonLabelKey = "start";
    }

    private tick() {
        if (!this.isPaused) {
            this.buttonLabelKey = "pause";

            if (--this.seconds < 0) {
                this.seconds = 59;
                if (--this.minutes < 0) {
                    this.resetPomodoro();
                }
            }
        }
    }

    private togglePause() {
        this.isPaused = !this.isPaused;
        if (this.minutes < this.settingsService.timerMinutes || this.seconds < 59) {
            this.buttonLabelKey = this.isPaused ? "resume" : "pause";
        }
    }
}
