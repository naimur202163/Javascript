const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], [this.mainMenu[mainIndex]]];
  },

  orderDelivary: function ({ mainIndex, starterIndex, time, address }) {
    console.log(
      `order Recived! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be deleverd to${address} at ${time} `
    );
  },
};

const arr = [7, 8, 9];

const newArr = [1, 2, 3, ...arr];

console.log(newArr);

const newMenu = [...restaurant.mainMenu, "Gnocci"];

console.log(newMenu);

// Copy Arry;

const mainMenuCopy = [...restaurant.mainMenu];

// Join to arrey

const main = [...restaurant.mainMenu, ...restaurant.starterMenu];

console.log(main);
