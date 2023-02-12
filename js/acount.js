     const depo = document.getElementById("depo");
     const depoI = document.getElementById("depo-i");
     const depoF = document.getElementById("depo-f");
     const totalAmount = document.getElementById("tottal-amount");

     depo.addEventListener("click",function(){
           
               let newDepo = parseFloat(depoI.value);
               let prevDpo =parseFloat(depoF.innerText);
     
               let curentDepo = prevDpo + newDepo;
                    depoF.innerText = curentDepo;
                
         let amount = parseFloat(totalAmount.innerText);
         let amounttottal = amount + newDepo;
         totalAmount.innerText = amounttottal;
        depoI.value='';
     });
      

     const widBtn = document.getElementById("wid");
     const widI = document.getElementById("wid-i");
     const widF = document.getElementById("wid-f");

          widBtn.addEventListener("click",function(){
           const newWed = parseFloat(widI.value);
           const prevWed = parseFloat(widF.innerText);
            const tottalWe = prevWed + newWed;
               widF.innerText = tottalWe;

          let amount = parseFloat(totalAmount.innerText);
           let amounttottal = amount - newWed;
               totalAmount.innerText = amounttottal
            widI.value = ''
          })
          