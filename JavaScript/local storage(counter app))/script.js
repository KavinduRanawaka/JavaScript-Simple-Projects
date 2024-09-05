if(localStorage.getItem('count')==null){
    document.getElementById('count').innerHTML="0";
}
else{
    document.getElementById('count').innerHTML=localStorage.getItem('count');
}

function add(){
    let cCount = parseInt(document.getElementById("count").innerHTML);
    document.getElementById("count").innerHTML=cCount+1;
    localStorage.setItem('count',cCount+1)
 }
 function sub(){
    let cCount = parseInt(document.getElementById("count").innerHTML);
    document.getElementById("count").innerHTML=cCount-1;
    localStorage.setItem('count',cCount-1)
 }