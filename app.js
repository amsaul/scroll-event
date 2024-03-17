//lets make the header changer color onscroll
let header = document.getElementById('header');
let heading = document.getElementById('h2')
let prevPos = scrollY;

//function to handle the scroll
function handleScroll(){
    let currentPos = scrollY;
    if (currentPos > prevPos){
        header.style.backgroundColor = 'white';
    }else{
        header.style.backgroundColor = 'black';
    };
};

window.onscroll = handleScroll;