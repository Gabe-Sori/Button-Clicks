const buttonOne = document.getElementById('p-button');
const buttonTwo = document.getElementById('img-button');
const paragraph = document.getElementById('p-div');
const image = document.getElementById('img-div');

function addParagraph() {
    paragraph.style.display = 'block';
    image.style.display = 'none';

    let newParagraph = document.createElement('p');
    newParagraph.textContent = 'Welcome to the partyy';
    newParagraph.style.backgroundColor = 'black';
    newParagraph.style.border = '5px solid black'
    newParagraph.style.color = 'white';
    paragraph.appendChild(newParagraph);
};

buttonOne.onclick = addParagraph;

function addImage() {
    image.style.display = 'block';
    paragraph.style.display = 'none';

    let newImage = document.createElement('img');
    newImage.src = 'Images/Gabypic1.jpg'; 
    newImage.style.width = '25%';
    image.appendChild(newImage);
};

buttonTwo.onclick = addImage;