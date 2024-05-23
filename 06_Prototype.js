const car = {
    wheels: 4,
    drive() {
        console.log('dirve..');
    },
};

const bmw = {
    color: 'red',
    navigation: 1,
};
const benz = {
    color: 'blue',
};
const audi = {
    color: 'black',
};

bmw.__proto__ = car;
benz.__proto__ = car;
audi.__proto__ = car;

const x5 = {
    color: 'white',
    name: 'x5',
};

x5.__proto__ = bmw;
console.log(x5.navigation);
