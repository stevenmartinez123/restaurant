import home from "./home";

const content = document.getElementById('content');

//create navigation and tabs to navigate between pages
const nav = document.createElement('nav');
content.appendChild(nav);
const ul = document.createElement('ul');
const tabs = ['Home', 'Menu', 'Contact'];
tabs.forEach(tab => {
    var li = document.createElement('li');
    li.id = `${tab}-tab`;
    li.textContent = `${tab}`;
    li.className = 'tab';
    li.addEventListener('click', logFunc);
    ul.append(li);
});
nav.appendChild(ul);

function logFunc() {
    console.log(this.childNodes[0]);
}