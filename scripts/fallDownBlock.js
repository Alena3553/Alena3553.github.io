"use strict"

let button = document.getElementById('workExperience');
let block1 = document.getElementById('company1');
let block2 = document.getElementById('company2');
button.addEventListener('click', function(){
    block1.classList.toggle('active');
     block2.classList.toggle('active');
})

let buttonProject = document.getElementById('ProjectsButton');
let list = document.getElementById('project');
buttonProject.addEventListener('click', function(){
    list.classList.toggle('active');
})


let buttonEducation = document.getElementById('Educationbtn');
let education = document.getElementById('education');
buttonEducation.addEventListener('click', function(){
    education.classList.toggle('active');
})



 // Также можно использовать style.display:
//  document.getElementsByClassName('show-more').onclick = function() {
//     document.getElementsByClassName('company').style.height = "100%";
//     document.getElementsByClassName('company').style.overflow = "visible";
//   }