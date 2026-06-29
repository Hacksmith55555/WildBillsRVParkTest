/* ===================================
   Wild Bill's RV Park
   Main JavaScript
=================================== */

// Initialize AOS Animations
AOS.init({
    duration: 1000,
    once: true,
    offset: 120
});

/* ===================================
   Scroll Progress Bar
=================================== */

const progressBar = document.getElementById("progressBar");

window.addEventListener("scroll", () => {

    const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress =
        (window.scrollY / totalHeight) * 100;

    progressBar.style.width = progress + "%";

});

/* ===================================
   Navbar Background
=================================== */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 80){

        header.style.background = "rgba(22,34,25,.92)";
        header.style.backdropFilter = "blur(18px)";
        header.style.boxShadow = "0 8px 30px rgba(0,0,0,.2)";

    }else{

        header.style.background = "rgba(0,0,0,.35)";
        header.style.boxShadow = "none";

    }

});

/* ===================================
   Smooth Anchor Links
=================================== */

document.querySelectorAll('a[href^="#"]').forEach(link=>{

    link.addEventListener("click",function(e){

        e.preventDefault();

        const target =
            document.querySelector(this.getAttribute("href"));

        target.scrollIntoView({

            behavior:"smooth"

        });

    });

});

/* ===================================
   Gallery Click Zoom
=================================== */

const images = document.querySelectorAll(".galleryGrid img");

images.forEach(image=>{

    image.addEventListener("click",()=>{

        const overlay = document.createElement("div");

        overlay.style.position="fixed";
        overlay.style.left="0";
        overlay.style.top="0";
        overlay.style.width="100%";
        overlay.style.height="100%";
        overlay.style.background="rgba(0,0,0,.9)";
        overlay.style.display="flex";
        overlay.style.alignItems="center";
        overlay.style.justifyContent="center";
        overlay.style.zIndex="99999";

        const img=document.createElement("img");

        img.src=image.src;

        img.style.maxWidth="90%";
        img.style.maxHeight="90%";
        img.style.borderRadius="15px";

        overlay.appendChild(img);

        overlay.onclick=()=>{

            overlay.remove();

        }

        document.body.appendChild(overlay);

    });

});

/* ===================================
   Floating Fireflies
=================================== */

for(let i=0;i<30;i++){

    const firefly=document.createElement("div");

    firefly.classList.add("firefly");

    firefly.style.left=Math.random()*100+"vw";
    firefly.style.top=Math.random()*100+"vh";

    firefly.style.animationDelay=
        Math.random()*10+"s";

    firefly.style.animationDuration=
        (5+Math.random()*8)+"s";

    document.body.appendChild(firefly);

}

/* ===================================
   Random Floating Motion
=================================== */

setInterval(()=>{

    document.querySelectorAll(".firefly").forEach(f=>{

        f.style.left=Math.random()*100+"vw";
        f.style.top=Math.random()*100+"vh";

    });

},9000);

/* ===================================
   Number Count Animation
=================================== */

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const number=entry.target;

const final=parseInt(
number.innerText.replace("$","")
);

let current=0;

const speed=final/60;

const counter=setInterval(()=>{

current+=speed;

if(current>=final){

current=final;
clearInterval(counter);

}

number.innerText="$"+Math.floor(current);

},20);

observer.unobserve(number);

}

});

});

document.querySelectorAll(".priceCard h1")
.forEach(el=>{

observer.observe(el);

});

/* ===================================
   Google Sheets Pricing
=================================== */

// Replace these with your own values
const SHEET_ID = "YOUR_SHEET_ID";
const API_KEY = "YOUR_API_KEY";

const url =
`https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/Sheet1?key=${API_KEY}`;

fetch(url)

.then(res=>res.json())

.then(data=>{

const rows=data.values;

document.getElementById("dailyPrice").innerHTML="$"+rows[1][1];
document.getElementById("weeklyPrice").innerHTML="$"+rows[1][2];
document.getElementById("monthlyPrice").innerHTML="$"+rows[1][3];

})

.catch(()=>{

console.log("Google Sheet not connected.");

});

/* ===================================
   Scroll Reveal Effect
=================================== */

const cards=document.querySelectorAll(".card");

window.addEventListener("scroll",()=>{

cards.forEach(card=>{

const top=card.getBoundingClientRect().top;

if(top<window.innerHeight-100){

card.style.opacity=1;
card.style.transform="translateY(0px)";

}

});

});

/* ===================================
   Hero Button Pulse
=================================== */

setInterval(()=>{

document.querySelector(".heroButton")
.classList.toggle("pulse");

},1500);