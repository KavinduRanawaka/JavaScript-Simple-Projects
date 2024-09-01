function addnum(){
   let firnum= parseInt(document.getElementById("fnum").value);
   let secnum= parseInt(document.getElementById("snum").value);

   let total=firnum+secnum;
   document.getElementById("final").innerHTML="Answer is "+ total;
}
