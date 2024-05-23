const User = function (name, age) {
    (this.name = name), (this.age = age);
    // this.showName = function () {
    //     console.log(this.name);
    // };
};

User.prototype.showName = function () {
    console.log(this.name);
};

const mike = new User('Mike', 30);

class User2 {
    constructor(name, age) {
        (this.name = name), (this.age = age);
    }
    showName() {
        console.log(this.name);
    } // 여기서 클래스내부에서 선언한 showName은 생성자에 포함되지않고 프로토타입으로 지정됨
}

const tom = new User2('tom', 19);
