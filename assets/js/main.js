let divs = document.querySelectorAll(".grid-container div");

let currentX = 0;
let currentY = 0;

function moveDown() {
    currentX += 82;
    currentY += 40;

     divs.forEach(function(div) {
        div.style.transform = `translateX(${currentX}px) translateY(${currentY}px)`;
     });
}

function moveUp() {
    currentX += -82;
    currentY += -41;

     divs.forEach(function(div) {
        div.style.transform = `translateX(${currentX}px) translateY(${currentY}px)`;
     });
}
function step() {
        if (Math.random() > 0.5) {
            moveUp();
        } else {
            moveDown();
        }
}

    document.addEventListener("click", step);
