function clas(){
    this.authenticate = function (arg1, arg2){
        if(arg1 == 'satya' && arg2 =='dev'){
            return "success";
        }
        else{
          return  "failure";
        }
    }
}