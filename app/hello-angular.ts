import {Component} from '@angular/core';

@Component({
    selector: 'hello-angular',
    template: `
        <h1> {{greeting}} <h1> 
    `
})

class HelloAngularComponent {
    greeting: string;
    constructor(){
        this.greeting = "Hello Angular 2!"
    }
}