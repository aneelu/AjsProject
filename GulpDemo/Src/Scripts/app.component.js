"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var customer_1 = require("./customer");
var AppComponent = (function () {
    function AppComponent() {
        this.customerObj = new customer_1.customer();
        this.data = [10, 20, 30, 40, 50];
        this.data_one = ["Hello_1", "Hello_2", "Hello_3", "Hello_4", "Hello_5"];
        this.data_two = { "records": [{ "Name": "Alfreds Futterkiste", "City": "Berlin", "Country": "Germany" }, { "Name": "Ana Trujillo Emparedados y helados", "City": "México D.F.", "Country": "Mexico" }, { "Name": "Antonio Moreno Taquería", "City": "México D.F.", "Country": "Mexico" }, { "Name": "Around the Horn", "City": "London", "Country": "UK" }, { "Name": "B's Beverages", "City": "London", "Country": "UK" }, { "Name": "Berglunds snabbköp", "City": "Luleå", "Country": "Sweden" }, { "Name": "Blauer See Delikatessen", "City": "Mannheim", "Country": "Germany" }, { "Name": "Blondel père et fils", "City": "Strasbourg", "Country": "France" }, { "Name": "Bólido Comidas preparadas", "City": "Madrid", "Country": "Spain" }, { "Name": "Bon app'", "City": "Marseille", "Country": "France" }, { "Name": "Bottom-Dollar Marketse", "City": "Tsawassen", "Country": "Canada" }, { "Name": "Cactus Comidas para llevar", "City": "Buenos Aires", "Country": "Argentina" }, { "Name": "Centro comercial Moctezuma", "City": "México D.F.", "Country": "Mexico" }, { "Name": "Chop-suey Chinese", "City": "Bern", "Country": "Switzerland" }, { "Name": "Comércio Mineiro", "City": "São Paulo", "Country": "Brazil" }] };
        this.uname = "";
        this.uage = "";
    }
    AppComponent.prototype.my_fun = function () {
        this.data_three[0] = this.uname;
        this.data_three[1] = this.uage;
        alert(this.data_three.length);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: 'UI/loops_one.html'
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map