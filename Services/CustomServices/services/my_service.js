/*
app.config(config);
config.$inject=["my_serviceProvider"];
function config(my_serviceProvider){
    my_serviceProvider.db_password="new password";
}

app.provider("my_service",my_service);
function my_service() {
    this.db_password="old password"
    this.$get = function () {
        return this.db_password;
    };
}*/


/*
function my_class(arg1){
    this.my_fun = function () {
        return arg1;
    };
};


app.factory("my_service",my_service);
function my_service() {
    return new my_class("data from db soon....").my_fun();
}
*/

/*app.constant("my_service","First Value");
app.constant("my_service","Can't Override");*/

/*
app.value("my_service","First Value");
app.value("my_service","We Can Override");
*/


app.service("my_service",my_service);
function my_service(){
    this.fun_one = function () {
        return "Data From NodeJS Server Soon...";
    };
};












