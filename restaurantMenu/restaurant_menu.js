const breakfastMenu = ['Pancakes - 12.22$', 'Eggs Benedict - 5.20$', 'Oatmeal - 10.5$', 'Frittata - 5$'];
const mainCourseMenu = ['Steak - 50$', 'Pasta - 30$', 'Burger - 25$', 'Salmon - 45$'];
const dessertMenu = ['Cake - 20$', 'Ice Cream - 10$', 'Pudding - 10$', 'Fruit Salad - 15$'];

const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');
    document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;

let mainCourseItem = '';
    mainCourseMenu.forEach((item, index) => {
        mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`;
    });
    document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem;

let dessertItem = '';
    for (let i = 0; i < dessertMenu.length; i++) {
        dessertItem += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;
    }
    document.getElementById('dessertMenuItems').innerHTML = dessertItem;