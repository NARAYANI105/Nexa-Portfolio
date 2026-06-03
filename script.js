const themeToggle = document.getElementById("themeToggle");

/* Load Saved Theme */

if(localStorage.getItem("theme") === "dark"){

    document.body.classList.add("dark-mode");

    themeToggle.innerHTML =
    '<i class="fas fa-sun"></i>';

}

/* Theme Toggle */

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){

        localStorage.setItem("theme","dark");

        themeToggle.innerHTML =
        '<i class="fas fa-sun"></i>';

    }
    else{

        localStorage.setItem("theme","light");

        themeToggle.innerHTML =
        '<i class="fas fa-moon"></i>';

    }

});

/* Contact Form */

const form = document.querySelector(".contact-form");

form.addEventListener("submit",(e)=>{

    e.preventDefault();

    alert("Message Sent Successfully!");

    form.reset();

});

/* Smooth Fade Animation */

const cards = document.querySelectorAll(
".about-card, .project-card, .skill-card"
);

const observer = new IntersectionObserver((entries)=>{

entries.forEach((entry)=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}

});

},{
threshold:0.2
});

cards.forEach((card)=>{

card.style.opacity="0";
card.style.transform="translateY(50px)";
card.style.transition="0.8s";

observer.observe(card);

});
