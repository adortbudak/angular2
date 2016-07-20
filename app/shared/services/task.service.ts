import {Injectable} from "@angular/core";
import {Task} from "../shared";
import { Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export default class TaskService {
    taskStore: Task[] = [];
    taskFeed: Observable<Task>;
    private taskObserver: any;
    private dataUrl = '/app/shared/data/raw-tasks.json';

    constructor(private http: Http) {
        this.taskFeed = new Observable(observer => {
            this.taskObserver = observer;
        });
        this.fetchTasks();
    }

    private addTask(task: Task){
        this.taskObserver.next(task);
    }

    private fetchTasks() {
        console.log("entered fetch");
        console.log(this.dataUrl);
        this.http.get(this.dataUrl)
            .map(response => response.json())
            .map(stream => stream.map( res => {
                return {
                    name: res.name,
                    deadline: new Date(res.deadline),
                    pomodorosRequired: res.pomodorosRequired,
                    queued: res.queued
                };
                }))
                .subscribe (
                    tasks => {
                        this.taskStore = tasks;
                        tasks.forEach(task => this.taskObserver.next(task))                            
                        },
                        error => console.log(error));
                    };    
}
