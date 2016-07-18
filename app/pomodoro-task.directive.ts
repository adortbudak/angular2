import {Directive,Input,HostListener} from '@angular/core'
import {Task} from './task';

@Directive({
    selector: '[task]'
})

export class TaskTooltipDirective{
    private defaultTooltipText: string;
    @Input() task: Task;
    @Input() taskTooltip: any;

    @HostListener('mouseover')
    onMouseOver(){        
        console.log(this.task.name);
        if(!this.defaultTooltipText && this.taskTooltip){
            this.defaultTooltipText = this.taskTooltip.innerText;
        }
        this.taskTooltip.innerText = this.task.name;
    }

    @HostListener('mouseout')
    onMouseOut(){
        if(this.taskTooltip){
            this.taskTooltip.innerText = this.defaultTooltipText;
        }
    }
}