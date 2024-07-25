let inputs = document.querySelectorAll('input');
let button =document.querySelector('button');

inputs.forEach((element,index) =>{

    element.addEventListener('keyup',(e) =>{
        let currentElement,prevElement,nextElement;

        currentElement = element;
        prevElement = element.previousElementSibling;
        nextElement = element.nextElementSibling;

        if(currentElement.value.length>1){
            currentElement.value = "";
            return;
        }
        if(nextElement&&nextElement.hasAttribute('disabled')&&currentElement.value !== ""){
            nextElement.removeAttribute('disabled');
            nextElement.focus();
            
        }
        if(e.key =="Backspace"){
            inputs.forEach((element,indexone)=>{
                if(index <= indexone&&prevElement){
                    prevElement.focus();
                    element.setAttribute('disabled','true');   
                }

             
            })
        }
           if (index === inputs.length - 1 && currentElement.value !== "") {
                    button.removeAttribute('disabled');
                } else {
                    button.setAttribute('disabled', 'true');
                }
    })
   
})

window.addEventListener('load', () =>{
    inputs[0].focus()
})