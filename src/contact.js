import facebookIcon from '../src/images/icon-facebook.png';
import instagramIcon from '../src/images/icons-instagram.png';
import tiktokIcon from '../src/images/icons-tiktok.png';
import yelpIcon from '../src/images/yelp.png';

export default function contact() {

    //creates container div for contact information 
    const contactContainer = document.createElement('div');
    contactContainer.className = 'contentContainer';
    contactContainer.id = "contact-container";

    //creates header for contact tab
    const header = document.createElement('h1');
    header.id = 'contact-header';
    header.textContent = "Have any Questions?";

    //creates form to contact restaurant 
    const form = document.createElement('form');
    form.id="contact-form";

    //phone label and email labels
    const phoneLabel = document.createElement('label');
    phoneLabel.setAttribute('for', 'phone');
    phoneLabel.textContent = "Phone: (213) 974-1234";

    const emailLabel = document.createElement('label');
    emailLabel.setAttribute('for', 'email');
    emailLabel.textContent = "Email: orders@DDLTacos.com";

    //heading to introduce social media accounts
    const followDiv = document.createElement('div');
    followDiv.id = 'followDiv';
    const followUs = document.createElement('h1');
    followUs.id = 'followUs';
    followUs.textContent = 'Follow Us!';

    //append nodes to content container
    form.append(header, phoneLabel, document.createElement('br'), emailLabel);

    //arrays to append social media buttons to webpage
    const buttons = ['Facebook', 'Instagram', 'Tiktok', 'Yelp'];
    const buttonSrc = [facebookIcon, instagramIcon, tiktokIcon, yelpIcon];
    let index = 0;

    const buttonDiv = document.createElement('div');
    buttonDiv.id = 'buttonDiv';
    //for each account create a button, add its image icon, and add to content container div
    buttons.forEach(button =>{

        let socialBtn = document.createElement('button');
        socialBtn.textContent = button;
        let imageForBtn = new Image();
        imageForBtn.src=buttonSrc[index++];
        imageForBtn.width='125';
        imageForBtn.height='125';
        socialBtn.className = 'social-btn';
        socialBtn.title=button;
        socialBtn.setAttribute('alt', button);
        socialBtn.setAttribute('type', 'button');
        socialBtn.append(imageForBtn);
        buttonDiv.append(socialBtn);
    });
    followDiv.append(followUs, buttonDiv);
    //adds form to content container
    contactContainer.append(form, followDiv);

    //returns content container to index.js
    return contactContainer;
}