// Search button
document.querySelectorAll('.search__card').forEach( item => {
    item.addEventListener('click', (event) => {
        document.querySelector('.search__input').value = item.textContent;
    });
});

// Phone menu
const overflow = document.querySelector('.overflow');
const menu = document.querySelector('.menu');
overflow.addEventListener('click', (event) => {
    if ( event.target === overflow || event.target === document.querySelector('.menu__close img') ) {
        setTimeout( function(){
            overflow.style.display = 'none';
        }, 500);
        menu.style.marginLeft = '-100%';
        setTimeout( function(){
            overflow.style.opacity = 0;
        }, 300);
    }
});

const menuButton = document.querySelector('.nav__menu');
menuButton.addEventListener('click', (event)=> {
    setTimeout( function(){
        menu.style.marginLeft = '0%';
    }, 200);
    overflow.style.display = 'block';
    setTimeout( function(){
        overflow.style.opacity = 1;
    }, 100);
});

// Line torch
const leftButton = document.querySelector('.first__left-button');
const rightButton = document.querySelector('.first__right-button');
const lines = document.querySelectorAll('.first__line');

function paintLine(num = 0) {
    lines.forEach( ( item, i ) => {
        item.classList.remove('first__line_active');
    });
    lines[num].classList.add('first__line_active');
}

lines.forEach( ( item, i ) => {
    item.addEventListener('click', (event) => {
        paintLine(i);
    });
});

function paintOnLeft() {
    if ( lines[0].classList.contains('first__line_active') ) {
        paintLine(2);
    } else if ( lines[1].classList.contains('first__line_active') ) {
        paintLine(0);
    } else if ( lines[2].classList.contains('first__line_active') ) {
        paintLine(1);
    }
}

function paintOnRight() {
    if ( lines[0].classList.contains('first__line_active') ) {
        paintLine(1);
    } else if ( lines[1].classList.contains('first__line_active') ) {
        paintLine(2);
    } else if ( lines[2].classList.contains('first__line_active') ) {
        paintLine(0);
    }
}

leftButton.addEventListener('click', (event) => {
    paintOnLeft();
});

rightButton.addEventListener('click', (event) => {
    paintOnRight();
});

// Effect slide on first screen
const firstScreen = document.querySelector('.first');
let touchStart = 0;
firstScreen.addEventListener('mousedown', event => {
    touchStart = event.clientX;
});
firstScreen.addEventListener('mouseup', event => {
    if ( touchStart < event.clientX ) {
        paintOnLeft();
    } else if ( touchStart > event.clientX ) {
        paintOnRight();
    } 
});

// Animation effect with plugin AOS
