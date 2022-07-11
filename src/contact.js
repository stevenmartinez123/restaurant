export default function contact() {
    const body = document.createElement('div');
    body.classList.add('heroCont');

    const bodyCopyCont = document.createElement('div');
    const bodyHeader = document.createElement('h1');
    bodyCopyCont.classList.add('bodyCopy');

 
    bodyHeader.textContent = "Hello from Contact.JS!"
    const homePara = document.createElement('p');
    homePara.textContent = "Eat my food now";

    bodyCopyCont.append(bodyHeader, homePara);
    body.append(bodyCopyCont);

    return body;
}