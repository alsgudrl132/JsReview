const add = (...numbers) => {
    let result = 0;
    numbers.forEach((num) => (result += num));
    console.log(result);
};

add(1, 2, 3, 4, 5); // 15

function User(name, age, ...skill) {
    this.name = name;
    this.age = age;
    this.skill = skill;
}

const user1 = new User('Min', 15, 'html', 'css');
const user2 = new User('Min', 15, 'html', 'css', 'js');

console.log(user1);
console.log(user2);
// User { name: 'Min', age: 15, skill: 'html' }
// User { name: 'Min', age: 15, skill: 'html' }

// User { name: 'Min', age: 15, skill: [ 'html', 'css' ] }
// User { name: 'Min', age: 15, skill: [ 'html', 'css', 'js' ] }

let user = { name: 'Min' };
let info = { age: 15 };
let fe = ['JS', 'React'];
let lang = ['Korean', 'English'];

user = Object.assign(user, info, { skills: [] });

// fe.forEach((item) => {
//     user.skills.push(item);
// });

// lang.forEach((item) => {
//     user.skills.push(item);
// });

user = {
    ...user,
    ...info,
    skills: [...fe, ...lang],
};

console.log(user);
// {
//   name: 'Min',
//   age: 15,
//   skills: [ 'JS', 'React', 'Korean', 'English' ]
// }
