function clickMe() {
    var obj = document.getElementById("my_paragraph");
    var result="";
    for(var i=0;i<10;i++){
        result=result+"\n"+i+"\n";
        obj.innerHTML = result+"\n";
    }
}