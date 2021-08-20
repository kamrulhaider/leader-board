const titleChange = document.getElementById('section-title');
titleChange.style.color = 'rgba(39, 97, 60, 0.74)';

function reset() {
    var elements = document.getElementsByClassName('player'); // get all elements
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = 'rgba(100, 90, 20, 0.74)';
    }
};
reset();

document.getElementById('ul-btn').addEventListener('click', function () {
    const ulList = document.getElementById('list');
    const newLi = document.createElement('li');
    newLi.innerText = 'new item';
    ulList.appendChild(newLi);
});

document.getElementById('increase-btn').addEventListener('click', function () {
    const inputValue = document.getElementById('increase-input');
    const atributGet = inputValue.value;
    const attributeValue = parseInt(atributGet);
    const newValue = attributeValue + 1;
    inputValue.value = newValue;
});