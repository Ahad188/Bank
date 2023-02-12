const email = document.getElementById("email");
const pass = document.getElementById("password");
const sub = document. querySelector(".submit");
// index js


          sub.addEventListener("click",function(){
               let userE = email.value;
               let userP = pass.value;
               if(userE == "merajul2907@gmail.com" && userP == 1234){
                    window.location.href = 'another.html'
               }else{
                    alert('please valid info');
               }
               email.value = '' ;
               pass.value = '';   
          });

       
     // another js
     
