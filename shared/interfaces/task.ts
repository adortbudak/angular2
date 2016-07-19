import {Queueable} from "../shared";

export interface Task extends Queueable {
    name: string;
    deadline: Date;
    pomodorosRequired: number;
}
