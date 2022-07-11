
export default function home() {
    const homeDiv = document.createElement('div');
    const header = document.createElement('h1');
    header.textContent = "Greetings from HomeScreen"
    homeDiv.appendChild(header);
    return homeDiv;
}