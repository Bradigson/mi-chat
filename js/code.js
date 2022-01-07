let inputMensaje = document.querySelector("#input");
let ul = document.querySelector("#ul");
let btnSend = document.querySelector("#send");
let body = document.querySelector("body");



let inputMensaje2 = document.querySelector('#input-2');
let ul2 = document.querySelector('#ul-2');
let btnSend2 = document.querySelector("#send-2");


btnSend.addEventListener("click",()=>{
    let li = document.createElement("li");
    let li3 = document.createElement("li");
    
    if(inputMensaje.value.length > 20){
        let alert = document.createElement("div");
        let btnClose1 = document.createElement("button");
        btnClose1.classList.add("btnClose1");
        btnClose1.innerHTML = "X";
        alert.classList.add("alert-1");
        alert.innerHTML =`${"Por el momento los mesajes muy extensos"}<br>${"no estan prmitido"}`;
        alert.appendChild(btnClose1);
        body.appendChild(alert);
        inputMensaje.value = "";
        btnClose1.addEventListener("click",()=>{
            body.removeChild(alert);
        })

    }else if(inputMensaje.value == ""){
        let alert = document.createElement("div");
        let btnClose1 = document.createElement("button");
        btnClose1.classList.add("btnClose1");
        btnClose1.innerHTML = "X";
        alert.classList.add("alert-1");
        alert.innerHTML =`${"Aun no has redactado tu mensaje en el Phone 1"}`;
        alert.appendChild(btnClose1);
        body.appendChild(alert);
        inputMensaje.value = "";
        btnClose1.addEventListener("click",()=>{
            body.removeChild(alert);
        })
    }
    
    else{
    li.innerHTML = inputMensaje.value;
    li3.innerHTML = inputMensaje.value;
    li.classList.add("lii");
    li3.classList.add("li");
    ul2.appendChild(li);
    ul.appendChild(li3);
    inputMensaje.value = "";
    }
 
   

})




btnSend2.addEventListener("click", ()=>{
    let li2 = document.createElement("li");
    let li4 = document.createElement("li");
    if(inputMensaje2.value==""){
        let alert2 = document.createElement("div");
        let btnClose2 = document.createElement("button");
        btnClose2.classList.add("btnClose2");
        btnClose2.innerHTML = "X";
        alert2.classList.add("alert2");
        alert2.innerHTML = `${"Aun no has escrito tu mensaje en el Phone 2"}`;    
        alert2.appendChild(btnClose2);
        body.appendChild(alert2);


        btnClose2.onclick = function(){
            body.removeChild(alert2);
        }
        inputMensaje2.value ="";

    }else if(inputMensaje2.value.length > 20){
        let alert2 = document.createElement("div");
        let btnClose2 = document.createElement("button");
        
        btnClose2.classList.add("btnClose2");
        btnClose2.innerHTML = "X";
        alert2.classList.add("alert2");
        alert2.innerHTML = `${"Por el momento los mesajes muy extensos"}<br>${"no estan prmitido"}`;   
        alert2.appendChild(btnClose2);
        body.appendChild(alert2);


        btnClose2.onclick = function(){
            body.removeChild(alert2);
        }
        inputMensaje2.value ="";
    }
    else{
        li2.innerHTML = inputMensaje2.value;
    li4.innerHTML = inputMensaje2.value;
    li2.classList.add("li22");
    li4.classList.add("li2");
    ul.appendChild(li2);
    ul2.appendChild(li4)
    inputMensaje2.value = "";
    }

})