import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: "<input [(ngModel)]='var_two'/> {{var_one}}"

})
export class AppComponent {
    var_two : string = "Welcome to Angular2"
}