import { Component } from "@angular/core";

@Component({
    selector:'logic-app',
    template: `
    <h1>{{num}}</h1>
    <button (click)="increment()" class="btn btn-primary mt-3">+</button>
    `
})

export class Logiccontent{
    num: number =0 
    
     increment(){
        this.num++;
     }
}