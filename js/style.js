//declative varible
  let name = document.getElementById("name");
  let email = document.getElementById('email');
  let pass =  document.getElementById('pass');
  let phone = document.getElementById('phone');
  


function reg_name() {
     
    let pat_name = /^[A-Z][a-zA-Z]+\s[a-zA-Z]$$/;
    let n =name.value;
    if(n.match(pat_name)){
         name.style.borderBottom= "2px solid #0f0";
        document.getElementById("mes_name").innerHTML="";
    }else{
       name.style.borderBottom = "2px solid #f00";
        document.getElementById("mes_name").innerHTML=" first letter is captial char then space then char ";
    }
}
function reg_pass() {
    
    let pat_pass = /^\d{8,20}$/;
    let p = pass.value;
    if(p.match(pat_pass)){
        pass.style.borderBottom ="2px solid #0f0";
         document.getElementById("mes_pass").innerHTML="";
    }else{
        pass.style.borderBottom = "2px solid #f00";
        document.getElementById("mes_pass").innerHTML="your password should between 8 and 20 number";
    }
}
function reg_mail() {
    
    let pat_mail = /^\w+@[A-Za-z]+?\.[A-Za-z]{2,3}$/;
    let e = email.value;
    if(e.match(pat_mail)){
        email.style.borderBottom = "2px solid #0f0";
         document.getElementById("mes_mail").innerHTML="";
    }else{
       email.style.borderBottom = "2px solid #f00";
        document.getElementById("mes_mail").innerHTML="you should enter \"@ \" and \". \" and any two or three char ";
    }
}
function reg_phone() {
   
    let pat_phone = /^01\d{9}$/;
    let p =phone.value;
    if(p.match(pat_phone)){
        phone.style.borderBottom = "2px solid #0f0";
         document.getElementById("mes_phone").innerHTML="";
    }else{
        phone.style.borderBottom = "2px solid #f00";
        document.getElementById("mes_phone").innerHTML="ytour phone should start with 01 and all number equal 11";
    }
}