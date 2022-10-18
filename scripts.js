function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function randomColor() {
    return `rgb(${getRandomInt(0, 256)}, ${getRandomInt(0, 256)}, ${getRandomInt(0, 256)})`;
}

function changeColor(e) {
    e.target.style.color = randomColor();
    e.target.style.backgroundColor = randomColor();
}

function addPhoto(e) {
    var element = document.createElement("img");
    element.id = "imid";
    element.src = "town.jpg";
    element.alt = "image alt";
    document.body.appendChild(element);
}

function deletePhoto(e) {
    var element = document.querySelector("#imid");
    if (element != null) { document.body.removeChild(element); }
}

function increasePhoto(e) {
    document.querySelectorAll("#imid").forEach(element => {
        element.height += 10;
        element.width += 10;
    });
}

function decreasePhoto(e) {
    document.querySelectorAll("#imid").forEach(element => {
        element.height -= 10;
        element.width -= 10;
    });
}

document.getElementById("el3").addEventListener("click", changeColor);
document.querySelector("#el4").addEventListener("click", changeColor);
document.getElementById("add").addEventListener("click", addPhoto);
document.getElementById("delete").addEventListener("click", deletePhoto);
document.getElementById("increase").addEventListener("click", increasePhoto);
document.getElementById("decrease").addEventListener("click", decreasePhoto);
