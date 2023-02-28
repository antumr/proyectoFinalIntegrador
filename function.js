/*----------------------MENU-------------------*/
document.getElementById("opcion-sobreMi").addEventListener("click", function(){
    
    document.getElementById("contenido-sobreMi").style.display = "block";
    document.getElementById("contenido-formacionAcademica").style.display = "none";
    document.getElementById("contenido-aptitudes").style.display = "none";
})  

document.getElementById("opcion-formacionAcademica").addEventListener("click", function(){
    
    document.getElementById("contenido-formacionAcademica").style.display = "block";
    document.getElementById("contenido-sobreMi").style.display = "none";
    document.getElementById("contenido-aptitudes").style.display = "none";
})

document.getElementById("opcion-aptitudes").addEventListener("click", function(){
    
    document.getElementById("contenido-aptitudes").style.display = "block";
    document.getElementById("contenido-formacionAcademica").style.display = "none";
    document.getElementById("contenido-sobreMi").style.display = "none";
})
/*----------------------MODO_NOCTURNO-------------------*/  
const btnswitch = document.querySelector("#switch");

btnswitch.addEventListener ("click", ()=>{
    document.body.classList.toggle("dark");
    btnswitch.classList.toggle("active");
})