function text() {
    let c = document.getElementById("txt").value;

    if (c == "a") {
        document.getElementById("demo").innerHTML="Hello!";
    }
    else if(c =="b"){
        document.getElementById("demo").innerHTML="How are you?";
    }
    else{
        document.getElementById("demo").innerHTML="Hope you are well!";
    }
}