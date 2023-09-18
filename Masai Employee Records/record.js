// fill in javascript code here
let myform=document.querySelector("form");
myform.addEventListener("submit",function(e){
 e.preventDefault()
 let name =document.getElementById("name").value;
 let Id=document.getElementById("employeeID").value;
 let department=document.getElementById("department").value;
 let email=document.getElementById("email").value;
 let mobile=document.getElementById("mbl").value;
 let experience=document.getElementById("exp").value;
  
     let role;
     if(experience>=5){
        role="Senior";
     }
     else if(experience<5&&experience>2){
        role="Beginner";
     }
     else{
        role="Fresher";
     };
    //  console.log(name+" "+Id+" "+department+" "+experience+" "+mobile+" "+email+" "+role);
     let tbody=document.querySelector("tbody");
     let row=document.createElement("tr");
     
     let data=[name,Id,department,email,mobile,experience,role];
     data.forEach((ele)=>{
      let td=document.createElement("td");
      td.innerText=ele;
      row.appendChild(td)
     })
     let del=document.createElement("td");
     let deletebtn=document.createElement("button");
     deletebtn.innerText="Delete";
     deletebtn.addEventListener("click",function(){
        tbody.removeChild(row);
     })
     del.appendChild(deletebtn);
     row.appendChild(del);






    tbody.appendChild(row)







})
