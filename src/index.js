import home from "./home";
import contact from "./contact";
import menu from "./menu";
import '../src/css/reset.css'
import '../src/css/styles.css';

const content = document.getElementById('content');
content.id = 'content';

//create navigation and tabs to navigate between pages
const nav = document.createElement('nav');
document.body.insertBefore(nav, content);
const ul = document.createElement('ul');
const tabs = ['Home', 'Menu', 'Contact'];
tabs.forEach(tab => {
    let li = document.createElement('li');
    li.id = `${tab}-tab`;
    li.textContent = `${tab}`;
    li.className = 'tab';
    li.addEventListener('click', displayTab);
    ul.append(li);
});
nav.appendChild(ul);

//sets home as default tab when page is loaded
const defaultTab = home();
content.append(defaultTab);

/*  function to display correct tab when clicked, 
    removes previous content and displays content of clicked tab
*/ 
function displayTab() {

    removeAllChildNodes(content);

    let chosenTab = this.id.charAt(0);
    let newContent;
    switch(chosenTab) {
        case 'H': 
            newContent = home();
            break;
        case 'M':
            newContent = menu();
            break;
        case 'C': 
            newContent = contact();
    }
    content.append(newContent);

    function removeAllChildNodes(parent) {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }
}