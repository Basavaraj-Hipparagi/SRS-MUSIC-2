const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
navLinks.classList.add("active");
});

closeBtn.addEventListener("click", () => {
navLinks.classList.remove("active");
});


// BAR CHART

const ctx = document.getElementById('skillChart');

if(ctx){

new Chart(ctx, {
type: 'bar',
data: {
labels: ['Research','Communication','Speaking','Analysis'],
datasets: [{
label: 'Skill Level',
data: [90,85,80,75],
backgroundColor: [
'#8B5A00',
'#c98b2b',
'#e3a84f',
'#f3c98a'
]
}]
},
options:{
responsive:true
}
});

}