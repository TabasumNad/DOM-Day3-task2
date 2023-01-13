function Insert() {
    let firstname=document.getElementById('first-name').value;
    let lastname=document.getElementById('last-name').value;
    let email=document.getElementById('email').value;
    let add=document.getElementById('address').value;
    let pcode=document.getElementById('pincode').value;
    let gender=document.querySelector('input[name="gender"]:checked').value;
    let food=document.querySelector('input[name="food"]:checked').value;
    let state=document.getElementById('state').value;
    let country=document.getElementById('country').value;

    if (validate(firstname,lastname,email,add,pcode,gender,state,country)){
    let table=`<tr>
<td>${firstname}</td>
<td>${lastname}</td>
<td>${email}</td>
<td>${add}</td>
<td>${pcode}</td>
<td>${gender}</td>
<td>${food}</td>
<td>${state}</td>
<td>${country}</td>

    </tr>`;
document.getElementById('tbl').innerHTML+=table;
clearForm();

    }
}

function validate(firstname,lastname,email,add,pcode,gender,state,country){
    let flag=true;
    if(firstname ==""){
        flag= false;
    }
    if(lastname ==""){
        flag= false;
    }
    
    if(email ==""){
        flag= false;
    }
    if(add ==""){
        flag= false;
    }
    if(pcode ==""){
        flag= false;
    }
    if(gender ==""){
        flag= false;
    }
    if(state ==""){
       flag= false;
    }
    if(country ==""){
        flag= false;
    }
    return flag;
    
}

function clearForm(){
   document.getElementById('first-name').value="";
  document.getElementById('last-name').value="";
  document.getElementById('email').value="";
    document.getElementById('address').value="";
    document.getElementById('pincode').value="";
    document.getElementById('state').value="";
   document.getElementById('country').value="";
    document.querySelector('input[name="gender"]:checked').value="";
    document.querySelector('input[name="food"]:checked').value="";

   

}
//    function myfun(){
//        let access=document.getElementsByName('food');
//        let newval=0;
   
//        for(let count=0;count<access.length;count++)
//        {
//    if(a[count].checked==true){
//        newval+=1;
//    }
//        }
//        if(newval>=2){
//           let msg= document.getElementById('notvalid').innerHTML=" select only two";
//            return msg;
//        }
   
//    }