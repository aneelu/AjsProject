import {Component} from 'angular2/core';
import {MyService} from './app.service';

@Component({
    selector: 'my-app',
    template: "<input [(ngModel)]='var_one'/>" +
    "{{var_one}}",
    providers : [MyService]

})
export class AppComponent {
    var_one : string="";
    constructor(obj : MyService){

        this.var_one = "Welcome To Angular2";
    }


    my_fun(){
        alert("Welcome to Angular2");
    }

}