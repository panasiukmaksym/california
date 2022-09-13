document.querySelectorAll('.search__card').forEach( item => {
    item.addEventListener('click', (event) => {
        document.querySelector('.search__input').value = item.textContent;
    });
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