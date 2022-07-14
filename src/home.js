
export default function home() {

    //creates home container div to store contents of tab
    const homeContainer = document.createElement('div');
    homeContainer.className = 'contentContainer';
    homeContainer.id = "home-container";

    //header created to display restaurant name and address
    const headingDiv = document.createElement('div');
    headingDiv.id = 'heading';
    headingDiv.className = 'home';

    const header = document.createElement('h1');
    header.id = 'header-home';
    const restaurantName = document.createTextNode("🌮 Dia de Los Tacos 🌮");
    const address = document.createElement('span')
    address.append('125 Paseo de la Plaza, Los Angeles CA, 90012');
    address.id = 'address';
    header.append(restaurantName, document.createElement('br'), address);
    headingDiv.append(header);
    homeContainer.append(headingDiv);

    //reviews
    const reviewsDiv = document.createElement('div');
    reviewsDiv.id = 'reviews';
    reviewsDiv.className = 'home';
    const reviewsHeader = document.createElement('h1');
    reviewsHeader.id='header-reviews';
    reviewsHeader.textContent="Reviews";
    reviewsDiv.append(reviewsHeader);

    const reviewOne = document.createElement('h2');
    reviewOne.className='author-quote';
    const authorQuote1 = "You won't get any better tacos than this, forget Los Angeles, this may be the best"
                        + " tacos in Southern California!";
    const author1 = document.createElement('span');
    author1.className='author-reviews';
    author1.append('- Bill Addison, Los Angeles Times');
    reviewOne.append(authorQuote1, document.createElement('br'), author1);

    const reviewTwo = document.createElement('h2');
    reviewTwo.className='author-quote';
    const authorQuote2 = "The food, the atmosphere, the music, just being here is an experience itself.";
    const author2 = document.createElement('span');
    author2.className='author-reviews';
    author2.append('- Anthony Bourdain');
    reviewTwo.append(authorQuote2, document.createElement('br'), author2);
    
    reviewsDiv.append(reviewOne, reviewTwo);
    homeContainer.append(reviewsDiv);

    //hours 
    const hoursDiv = document.createElement('div');
    hoursDiv.id = 'hours';
    hoursDiv.className = 'home';
    const hoursHeader = document.createElement('h1');
    hoursHeader.id = 'header-hours';
    hoursHeader.textContent='Hours';
    hoursDiv.append(hoursHeader);

    const hours = document.createElement('span');
    hours.id = 'hours-schedule';
    hours.append('Sunday: 10:00am - 10:00pm', document.createElement('br'));
    hours.append('Monday: 9:00am - 12:00am', document.createElement('br'));
    hours.append('Tuesday: 9:00am - 12:00am', document.createElement('br'));
    hours.append('Wednesday: 9:00am - 12:00am', document.createElement('br'));
    hours.append('Thursday: 9:00am - 12:00am', document.createElement('br'));
    hours.append('Friday: 10:00am - 2:00am', document.createElement('br'));
    hours.append('Saturday: 10:00am - 2:00am');
    hoursDiv.append(hours);
    homeContainer.append(hoursDiv);

    return homeContainer;
}