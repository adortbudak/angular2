import TasksComponent from "./tasks.component";
import TaskTooltipDirective from "./task-tooltip.directive";
import TaskEditorComponent from './task-editor.component';

const TASKS_DIRECTIVES: any[] = [
    TasksComponent,
    TaskEditorComponent,
    TaskTooltipDirective
];

export {
    TASKS_DIRECTIVES,
    TasksComponent,
    TaskEditorComponent,
    TaskTooltipDirective
}
