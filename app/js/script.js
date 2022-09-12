document.querySelector('.search').addEventListener('click', (event) => {
    if (event.path[1].classList[0] == 'search__card' || event.path[0].classList[0] == 'search__card') {
        document.querySelector('.search__input').value = event.target.textContent;
    }
    // console.log(event.target.textContent);
    // console.log(event.target);
});

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