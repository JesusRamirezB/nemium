const firstImage = document.getElementById('image0');
const secondImage = document.getElementById('image180');
const thirdImage = document.getElementById('image2');
const image = document.getElementById('shownImage')

firstImage.addEventListener('click', firstSelected);
secondImage.addEventListener('click', secondSelected);
thirdImage.addEventListener('click', thirdSelected);

function firstSelected() {
    console.log('firstClicked');
    firstImage.className = "dark"
    secondImage.className = "clear";
    thirdImage.className = "clear";
    image.src = 'https://picsum.photos/id/0/300/300';
}

function secondSelected() {
    console.log('secondClicked');
    firstImage.className = "clear";
    secondImage.className = "dark"
    thirdImage.className = "clear";
    image.src = 'https://picsum.photos/id/180/300/300';
}

function thirdSelected() {
    console.log('thirdClicked');
    firstImage.className = "clear";
    secondImage.className = "clear";
    thirdImage.className = "dark";
    image.src = 'https://picsum.photos/id/2/300/300';
}