function f0(){
    let prev = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML=prev+0;
}
function f1(){
    let prev = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML=prev+1;
}
function f2(){
    let prev = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML=prev+2;
}
function f3(){
    let prev = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML=prev+3;
}
function f4(){
    let prev = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML=prev+4;
}
function f5(){
    let prev = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML=prev+5;
}
function f6(){
    let prev = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML=prev+6;
}
function f7(){
    let prev = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML=prev+7;
}
function f8(){
    let prev = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML=prev+8;
}
function f9(){
    let prev = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML=prev+9;
}
function ferase(){
    let prev = document.getElementById("display").innerHTML;
    let erasepre= prev.slice(0, -1)
    document.getElementById("display").innerHTML=erasepre;
}
let op;
let firstsave
function fadd(){
    firstsave = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML=0;
    op="add";
}
function fsub(){
    firstsave = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML=0;
    op="sub";
}
function fmul(){
    firstsave = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML=0;
    op="mul";
}
function fdv(){
    firstsave = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML=0;
    op="dv";
}
function feq(){
    let secondsave = document.getElementById("display").innerHTML;
    if(op=="add"){
        document.getElementById("display").innerHTML=parseInt(firstsave)+parseInt(secondsave);
    }
    else if(op=="sub"){
        document.getElementById("display").innerHTML=parseInt(firstsave)-parseInt(secondsave);
    }
    else if(op=="mul"){
        document.getElementById("display").innerHTML=parseInt(firstsave)*parseInt(secondsave);
    }
    else if(op=="dv"){
        document.getElementById("display").innerHTML=parseInt(firstsave)/parseInt(secondsave);
    }
    else{
        document.getElementById("display").innerHTML="Inavalid ";
    }
}

function fac(){
    document.getElementById("display").innerHTML="0";
    op= 0;
    firstsave =0;
    secondsave =0;
}
