const user = {
    name: 'Min',
};
const info1 = {
    age: 15,
};
const info2 = {
    gender: 'male',
};

Object.assign(user, info1, info2);

console.log(user);

//{ name: 'Min', age: 15, gender: 'male' }
