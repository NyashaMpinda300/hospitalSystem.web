const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".Navigation_ul")

hamburger.addEventListener("click", () => {

hamburger.classList.toggle("active");
navMenu.classList.toggle("active");

})

document.querySelectorAll(".Navigation_ul a").forEach(n => 
    n.addEventListener("click",() => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }))



function takeNotes(){


let patientDiary = document.querySelector('#dailyDiary');


patientDiary.addEventListener('click', ()=>{

    document.getElementById("patientForm").style.display = "block";
    document.getElementById("statusPage").style.display = "none";
    document.getElementById("patientMonitor").style.display = "none";
   
				

}

);





}


function checkVitals(){


    let patientVitals = document.querySelector('#Vitals');
    
    
    patientVitals.addEventListener('click', ()=>{
    
        document.getElementById("patientMonitor").style.display = "block";
        document.getElementById("statusPage").style.display = "none";
        document.getElementById("patientForm").style.display = "none";
       
                    
    
    }
    
    );
    
    
    
    
    
    }
    


'<input type="text" class="field" placeholder="Your Name">'