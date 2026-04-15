// • 운송수단을 의미하는 Vehicle 클래스를 정의하라.
// • 속도를 관리하는 speed라는 속성을 정의하라.
// • speed를 10 증가하는 메쏘드를 정의하라.
// • speed를 10 감소하는 메쏘드를 정의하라.
// • 현재속도를 표시하는 info 메쏘드를 정의하라.

class Vehicle{
    constructor(speed){
        this.speed = speed;
    }
    speedUp(){
        this.speed += 10;
    }
    speedDown(){
        this.speed -= 10;
    }
}
const vehicle = new Vehicle(0);
vehicle.speedUp();
console.log(vehicle.speed);
vehicle.speedDown();
console.log(vehicle.speed);




// 상속
class Car extends Vehicle{
    constructor(speed, wheels, seats){
        super(speed);
        this.wheels = wheels;
        this.seats = seats;
    }
    drive(){ console.log(`현재 속도는 ${this.speed}로 운행`)};
}
const car = new Car(100, 4, 4);
car.speedUp();
console.log(car.speed);
car.drive();



// 실습
// • Car class를 상속받아서 Truck class를 정의하라.
// • 적재량을 관리하는 loadage 정수형 변수를 정의하고 초기값 0으로 설정
// • ‘load’를 화면에 인쇄하는 load 메쏘드를 정의하라.
// • ‘unLoad’를 화면에 인쇄하는 unLoad 메쏘드를 정의하라.

class Truck extends Car{
    constructor(speed, wheels, seats, loadage = 0){
        super(speed, wheels, seats);
        this.loadage = loadage;
    }
    load(){
        console.log('load');
    }
    unLoad(){
        console.log('unLoad');
    }
}

const truck = new Truck(80, 6, 2);

truck.speedUp();
console.log(truck.speed); // 90

truck.drive(); // 현재 속도는 90로 운행

truck.load();   // load
truck.unLoad(); // unLoad
