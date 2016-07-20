import {Pipe, PipeTransform} from "@angular/core";
import {Queueable} from "../shared";

@Pipe({
    name: "pomodoroQueuedOnly",
    pure: false,
})

export class QueuedOnlyPipe implements PipeTransform {
    transform(queueableItems: Queueable[], ...args): Queueable[] {
        return queueableItems.filter((queueableItem: Queueable) => {
            return queueableItem.queued == args[0];
        });
    }
}

