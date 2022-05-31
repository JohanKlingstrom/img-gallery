const grid = document.querySelector('.grid');
const gridItems = [...document.querySelectorAll('.grid-item')];
const gridRows = [...document.querySelectorAll('.row')];
const images = [...document.querySelectorAll('.img')];
const heading = document.querySelector('.heading');

images.forEach((img, index) => {
    img.style.backgroundImage = `url(./assets/${index + 1}.jpg)`;
})

gridItems.forEach((item, index) => {
    item.addEventListener('click', (e) => {
        let isActive = e.target.classList.contains('active');

        for(let i = 0; i < gridItems.length; i++){
            gridItems[i].classList.remove('active');
        }

        if(isActive){
            gridRows[0].style.height = '50%';
            gridRows[1].style.height = '50%';
            for(let i=0; i < gridItems.length; i++){
                gridItems[i].classList.remove('expand');
            }
            return;
        }

        gridItems[index].classList.add('active');
    })
})

function setActive(indexArray) {
    for(let i = 0; i < gridItems.length; i++){
        if(indexArray.includes(i)) {
            gridItems[i].classList.add('expand');
        } else {
            gridItems[i].classList.remove('expand');
        }
    }
}