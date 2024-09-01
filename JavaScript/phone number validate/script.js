function validation(){
    let phone = document.getElementById("num").value;

    let numLength= phone.length;
    let firstnums= phone.substr(0, 2);
    let lastnums=phone.substr(numLength-9,9);
    let num;

    if(numLength<9) {
        alert("Numbers Missing");
        document.getElementById("msg").innerHTML= "Invalid Number";
    }
    else if(numLength ==9){
        alert("Number validation successful");
        num= "94"+phone;
        document.getElementById("msg").innerHTML=num;
    }
    else if(numLength==10){
        alert("Number validation successful");
        num="94"+lastnums
        document.getElementById("msg").innerHTML=num;
    }
    else if(numLength > 11) {
        alert("Invalid Number! Please check again")
        document.getElementById("msg").innerHTML= "Invalid Number";
    }
    else if(numLength ==11 && firstnums !=94){
         alert("Invalid Number! Please check again")
        document.getElementById("msg").innerHTML= "Invalid Number";
    }
    else if(numLength ==11 && firstnums ==94){
        alert("Number validation successful");
        num=phone
        document.getElementById("msg").innerHTML=num;
   }
   else{
    alert("Invalid Number! Please check again")
    document.getElementById("msg").innerHTML= "Invalid Number";
   }
    
}