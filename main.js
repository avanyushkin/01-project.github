const images = document.querySelectorAll('.image'); /*получаем каждый из слайдов в строковом формате*/

images[0].classList.add('active');

for (const image of images) {
    image.addEventListener('mouseover', () => {
        /*при клике нужно удалять класс active у всех слайдов кроме текущего*/
        clearActiveClasses();
        /*при клике нужно добавить класс active*/
        image.classList.add('active')
    })
}

function clearActiveClasses() {
    for (const image of images) {
        image.classList.remove('active');
    } 
}
