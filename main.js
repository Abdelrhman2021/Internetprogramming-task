const clickBox = document.getElementById("click-Box");
const dblclickBox = document.getElementById("dblclick-Box");
const mouseenterBox = document.getElementById("mouseenter-Box");
const mouseleaveBox = document.getElementById("mouseleave-Box");
const mousedownBox = document.getElementById("mousedown-Box");
const mouseupBox = document.getElementById("mouseup-Box");
const keyupBox = document.getElementById("keyup-Box");
const keydownBox = document.getElementById("keydown-Box");
const keypressBox = document.getElementById("keypress-Box");
const focusBox = document.getElementById("focus-Box");
const blurBox = document.getElementById("blur-box");
const changeBox = document.getElementById("change-box");

clickBox.addEventListener("click", () => {
    clickBox.querySelector("p").textContent = "I got clicked";
});

dblclickBox.addEventListener("dblclick", () => {
    dblclickBox.querySelector("p").textContent = "I got double clicked";
});

mouseenterBox.addEventListener("mouseenter", () => {
    mouseenterBox.querySelector("p").textContent = "I got mouse entered";
});

mouseleaveBox.addEventListener("mouseleave", () => {
    mouseleaveBox.querySelector("p").textContent = "I got mouse left";
});

mousedownBox.addEventListener("mousedown", () => {
    mousedownBox.querySelector("p").textContent = "I got mouse down";
});

mouseupBox.addEventListener("mouseup", () => {
    mouseupBox.querySelector("p").textContent = "I got mouse up";
});

keyupBox.addEventListener("keyup", (event) => {
    keyupBox.querySelector("p").textContent = `Key up event: ${event.key}`;
});

keydownBox.addEventListener("keydown", (event) => {
    keydownBox.querySelector("p").textContent = `Key down event: ${event.key}`;
});

keypressBox.addEventListener("keypress", (event) => {
    keypressBox.querySelector("p").textContent = `Key press event: ${event.key}`;
});

focusBox.addEventListener("focus", () => {
    focusBox.querySelector("p").textContent = "I got focus";
});

blurBox.addEventListener("blur", () => {
    blurBox.querySelector("p").textContent = "I lost focus";
});

changeBox.addEventListener("change", (event) => {
    changeBox.querySelector("p").textContent = `New value: ${event.target.value}`;
});

document.getElementById('placeholder-data').addEventListener('click', function () {
    fetch('https://jsonplaceholder.typicode.com/posts')
     .then(response => response.json())
     .then(data => {
         const dataContainer = document.getElementById('output');
         dataContainer.innerHTML = '';

         data.forEach(item => {
             const dataItem = document.createElement('div');
             dataItem.classList.add('data-item');
             dataItem.innerHTML = `
                 <p>ID: ${item.id}</p>
                 <p>User ID: ${item.userId}</p>
                 <p>Title: ${item.title}</p>
                 <p>Body: ${item.body}</p>
             `;
             dataContainer.appendChild(dataItem);
         });
     });
});