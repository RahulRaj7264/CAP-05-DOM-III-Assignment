// fill in javascript code here


let myForm =document.querySelector("form");

myForm.addEventListener("submit",function(e){

          e.preventDefault();

        let name = document.getElementById("name").value;
        let id =   document.getElementById("docID").value;
        let dept = document.getElementById("dept").value;
        let exp  = document.getElementById("exp").value;
        let email = document.getElementById("email").value;
        let mbl  = document.getElementById("mbl").value;


        let role;

        if(exp >= 5){
            role = "Senior"
        }
        else if(exp < 5 && exp > 2){
            role = "Junior"
        }
        else{
            role = "Trainee"
        }


        // console.log(name + " " + id + " " + dept + " " + exp + " " + email + " " + mbl);

        let  tbody = document.querySelector("tbody");
        let row = document.createElement("tr");

        let data =[name,id,dept,exp,email,mbl,role];

        data.forEach((ele)=>{
            let td=document.createElement("td");
            td.innerText=ele;
            row.appendChild(td);

        })
        
        let del = document.createElement("td");
        let deletebtn = document.createElement("button");
        deletebtn.innerText ="Delete";
        deletebtn.style.backgroundColor = "red";
        deletebtn.addEventListener("click",function(){
         tbody.removeChild(row);
         
        
        })


         del.appendChild(deletebtn);
          row.appendChild(del);
          



        tbody.appendChild(row);

})
