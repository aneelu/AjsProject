import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: '<div *ngIf=flag><h1>Welcome to click with if directive</h1></div><button (click)="my_fun()">Click Me</button>'

})
export class AppComponent {

    flag:boolean;

    constructor(){
        this.flag=true;
    }
    my_fun(){
        if(this.flag){
            this.flag=false;
        }else{
            this.flag=true;
        }
    }
}
