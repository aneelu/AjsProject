function my_fun() {
    if ((parseInt(document.getElementById("my_id").value))>10){
        document.getElementById("my_paragraph").innerHTML = "Number Greater Than 10";
    }else{
        document.getElementById("my_paragraph").innerHTML = "Number Less Than 10";
    }
}