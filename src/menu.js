//imported images to display with food items
import taco from "../src/images/taco.jpg";
import burrito from "../src/images/burrito.jpg";
import enchilada from "../src/images/enchilada.jpg";
import tamale from "../src/images/tamale.jpg";
import soda from "../src/images/soda.jpg";
import beer from "../src/images/beer.jpg";
import horchata from "../src/images/horchata.jpg";
import flan from "../src/images/flan.jpg";
import churro from "../src/images/churro.jpg";
import panDulce from "../src/images/pan-dulce.jpg";

export default function menu() {

    //creates menu container for menu contents
    const menuContainer = document.createElement('div');
    menuContainer.className = 'contentContainer';
    menuContainer.id = "menu-container";

   //array for menu items
    const menuHeadings = ['Menu', 'Entrees', 'Drinks', 'Desserts'];

    //populate divs in menu for each heading in menuHeadings array
    let index = 0
    menuHeadings.forEach(item => {
        let headerDiv = document.createElement('div');
        headerDiv.className = 'menu';
        let heading = document.createElement('h1');
        heading.className = 'menu-header';
        heading.textContent = item;
        headerDiv.append(heading);
        if (index >= 1) { //skips menu and iterates items starting at entrees
            let menuItems = populateMenuItems(index);
            headerDiv.append(menuItems);
        }
        menuContainer.append(headerDiv);
        index++;
    });

    return menuContainer;

}

function populateMenuItems(index) {
    //food div to append to menuHeader div
    let foodDiv = document.createElement('div');
    
    const entreeItems = [
        menuItem('Taco', 'Chicken, Al Pastor, Asada, or Carnitas', '$1.99', taco),
        menuItem('Burrito (Wet or Dry) ', 'Beans, Cheese, Rice, Pico de Gallo, Salsa, '
                + 'with choice of meat of Chicken, Beef, or Asada in a tortilla double-wrapped', '$11.00', burrito),
        menuItem('Tamales', '3 Chicken or Pork Tamales made from scratch with signature red sauce', '$15.00', tamale),
        menuItem('Enchiladas', 'Two enchiladas topped with red sauce, melted cheese, sour cream, ' 
                + 'guacamole', '$12.99', enchilada)
    ];

    const drinkItems = [
        menuItem('Soda', 'Sprite, Coca-Cola, Diet Coke, Fanta, Root Beer', 'S: $1.99 R: $2.99', soda),
        menuItem('Horchata', 'Fresh Horchata made every morning', 'S: $2.99 R: $3.99', horchata),
        menuItem('Cerveza', 'Modelo, Pacifico, Budweiser, Tecate, Corona, Dos Equis, Baja IPA', '$6.00 12oz', beer)
    ]

    const dessertItems = [
        menuItem('Pan Dulce', 'Sweet Bread coming in the flavors chocolate, strawberry, and vanilla', '$1.50', panDulce),
        menuItem('Flan', 'Caramel custard with a generous layer of caramel sauce on top', '$2.00', flan),
        menuItem('Churro', 'Stick shaped fried bread with a hefty amount of cinnamon', '$1.00', churro)
    ];

    //populates divs with the correct menu product
    if (index == 1) {
        createFoodDiv(entreeItems);
    } else if (index == 2) {
        createFoodDiv(drinkItems);
    } else if (index == 3) {
        createFoodDiv(dessertItems);
    }

    //for each food item in array creates its text content and appends to a div
    function createFoodDiv(array) {
        array.forEach(item =>{
            let nameCostDiv = document.createElement('div');
            nameCostDiv.className = 'nameCostDiv';
            //name of item
            let name = document.createElement('h1');
            name.className = 'menuItem';
            name.textContent = item.itemName;
            //description of item
            let desc = document.createElement('p');
            desc.className = 'menuDesc';
            desc.textContent = item.itemDescription;
            //cost of item
            let cost = document.createElement('h3');
            cost.textContent = item.itemPrice;
            cost.className = 'menuItem';
            let image = new Image();
            //photo of item
            image.className = 'menuImage';
            image.src = item.itemPhoto;
            image.width='250';
            image.height='250';

            nameCostDiv.append(name, cost);
            foodDiv.append(nameCostDiv, image, desc);
        }); 

    }

    return foodDiv;
}

//menu item object to create menu items
var menuItem = (itemName, itemDescription, itemPrice, itemPhoto) => {
    return {
        itemName,
        itemDescription,
        itemPrice,
        itemPhoto
    };
};