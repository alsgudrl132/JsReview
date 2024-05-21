const user = {
    name: 'Min',
    age: 15,
    gender: 'male',
};

console.log(Object.entries(user)); //[ [ 'name', 'Min' ], [ 'age', 15 ], [ 'gender', 'male' ] ] 키/값 배열을 반환한다

const arr = [
    ['name', 'Min'],
    ['age', 30],
    ['gender', 'male'],
];

console.log(Object.fromEntries(arr));
