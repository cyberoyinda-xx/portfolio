alert("Welcome to my Cyber Security Portfolio!");
document.getElementById("2026").textContent =
new Date().getFullYear();


function toggleTheme() {
    document.body.classList.toggle("light-mode");

    const button = document.getElementById("themeButton");

    if (document.body.classList.contains("light-mode")) {
        button.textContent = "☀";
    } else {
        button.textContent = "☾";
    }
}

const typingElement = document.getElementById("typing");

const text = "Future Cyber Security Professional";

let index = 0;

function typeWriter() {
    if (index < text.length) {
        document.getElementById("typing").textContent += text.charAt(index);
        index++;
        setTimeout(typeWriter, 100);
    }
}

window.onload = typeWriter;
const words = [
    "Python Developer in Training",
    "Technology Enthusiast"
];


let wordIndex = 0;
let letterIndex = 0;


function type(){

    if(letterIndex < words[wordIndex].length){

        document.getElementById("typing").innerHTML += 
        words[wordIndex].charAt(letterIndex);

        letterIndex++;

        setTimeout(type, 100);

    }

    else {

        setTimeout(erase, 1500);

    }

}


function erase(){

    if(letterIndex > 0){

        document.getElementById("typing").innerHTML =
        words[wordIndex].substring(0, letterIndex-1);

        letterIndex--;

        setTimeout(erase,50);

    }

    else{

        wordIndex++;

        if(wordIndex >= words.length){
            wordIndex = 0;
        }

        setTimeout(type,500);

    }

}


type();
