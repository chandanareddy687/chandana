const text = [
    "Diploma Student",
    "Python Developer",
    "C Programmer",
    "Quick Learner"
];

let index = 0;
let char = 0;
let current = "";
let typing = document.getElementById("typing");

function type() {

    if(index < text.length){

        current = text[index];

        typing.textContent = current.substring(0,char);

        char++;

        if(char > current.length){

            index++;

            char = 0;

            if(index == text.length){

                index = 0;

            }

        }

    }

    setTimeout(type,200);

}

type();
