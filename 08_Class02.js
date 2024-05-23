// extends
// overriding
class Car {
    constructor(color) {
        this.color = color;
        this.wheel = 4;
    }
    drive() {
        console.log('drive..');
    }
    stop() {
        console.log('stop');
    }
}

class Bmw extends Car {
    constructor() {
        super();
        this.navigation = 1;
    }
    park() {
        console.log('park');
    }
    stop() {
        console.log('stop2');
    } // 오버라이딩을하여 Bmw에서는 부모의 stop이아니라 Bmw만의 stop2메서드를 사용, 만약 부모의 메서드를 그대로 사용하고싶다면 super를 사용하면됨
    //super.stop();
}

const z4 = new Bmw('blue');
console.log(z4);
