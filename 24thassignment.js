// 
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

// Add 'Meat' to the beginning if not already added
if (!shoppingCart.includes('Meat')) {
    shoppingCart.unshift('Meat');
}

console.log(shoppingCart);

if (!shoppingCart.includes('Sugar')) {
    shoppingCart.push('Sugar');
}

console.log(shoppingCart);

const allergicToHoney = true; // Change to false if not allergic

if (allergicToHoney) {
    const index = shoppingCart.indexOf('Honey');
    if (index !== -1) {
        shoppingCart.splice(index, 1);
    }
}

console.log(shoppingCart);

// Modify 'Tea' to 'Green Tea'
const teaIndex = shoppingCart.indexOf('Tea');
if (teaIndex !== -1) {
    shoppingCart[teaIndex] = 'Green Tea';
}

console.log(shoppingCart);
