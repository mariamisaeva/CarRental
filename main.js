let box = document.getElementById('box'); //Write in green(search-box)
box.style.display = 'inline';
box.onfocus = function () {
    this.style.color = 'orangeRed';
}

//DropDownMenu 
let mIcon = document.querySelector('#m-icon');
let dropdown = document.querySelector('.dropdownMenu');
//appear onclick
mIcon.addEventListener('click', () => {
    if (dropdown.style.display == 'none')
        dropdown.style.display = 'block';
    else
        dropdown.style.display = 'none';
});
//hide on mouse leave
dropdown.addEventListener('mouseleave', () => {
    if (dropdown.style.display = 'block')
        dropdown.style.display = 'none';
    else
        dropdown.style.display = 'block';
});
window.onload = function () {
    dropdown.style.display = "none";
}

/**
 * 1. I have to hold the class in a var 
 * 2. add listener for dragging on mousemove
 * 3. create a function "dragging " pass a parameter "coordinate of mouse pointer"{ make the scrollLeft number of pixels of elements is scrolled horizontally (will delete it later)
 * 
 * 4. 
 */

//BRANDS SLIDER
//1:
const brands = document.querySelector('.brands');

let startDrag = false; //off (def)
let prevPageX, prevScrollLeft; //2. to make pics on mouse pointer

//update global vars value on mouse down event
const dragOn = (a) => { //on (onDown)
    startDrag = true;
    prevPageX = a.pageX;//2
    //scrollLeft gives px nums of elements scrolled horizontally:
    prevScrollLeft = brands.scrollLeft;//2
}

//Scrolling imgs to left according to mouse pointer
const dragging = (a) => {//on (onMove)
    //condition
    if (!startDrag) return;
    a.preventDefault();
    //3.smooth.scroll
    brands.classList.add('dragging');
    let position = a.pageX - prevPageX;//2
    /*  brands.scrollLeft = a.pageX;//scrollLeft pageX */
    brands.scrollLeft = prevScrollLeft - position;//scrollLeft + position
}

const dragOff = () => {//up (off)
    startDrag = false;
    brands.classList.remove('dragging');//3.remove
}

/*mousemove
brands.addEventListener('mousemove', dragging);*/
//listener mouseDown dragging
brands.addEventListener('mousedown', dragOn);
//2:
brands.addEventListener('mousemove', dragging);
brands.addEventListener('mouseup', dragOff);

//ARROWS

//1st-img
img1 = brands.querySelectorAll('img')[0];

let arrows = document.querySelectorAll('.wrapper i');//allArr

//get 1st img by adding 14 margin
img1Width = img1.clientWidth + 14; //14:margin-left


arrows.forEach(icon => {
    icon.addEventListener('click', () => {
        brands.scrollLeft += icon.id == "left" ? -img1Width : img1Width;
    })
});


let envelope = document.querySelector('#envelope');

let fb = document.querySelector('#fb');
let insta = document.querySelector('#insta');
let wa = document.querySelector('#wa');
let twt = document.querySelector('#twt');

//envelope
envelope.addEventListener('click', () => {
    window.location.href = 'https://www.google.com/gmail/about/';
});

fb.addEventListener('click', () => {
    // window.location.href = 'https://www.facebook.com/facebook/'; 
    window.open('https://www.facebook.com/facebook/');
});

insta.addEventListener('click', () => {
    window.open('https://www.instagram.com/');
});

wa.addEventListener('click', () => {
    window.open('https://www.whatsapp.com/');
});

twt.addEventListener('click', () => {
    window.open('https://www.twitter.com/twitter/');
});










