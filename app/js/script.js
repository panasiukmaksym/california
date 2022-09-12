document.querySelector('.search').addEventListener('click', (event) => {
    if (event.path[1].classList[0] == 'search__card' || event.path[0].classList[0] == 'search__card') {
        document.querySelector('.search__input').value = event.target.innerText;
    }
});