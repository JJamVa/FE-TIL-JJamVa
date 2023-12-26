# 클래스(class)의 type 지정

## class 필드값 type 지정

```ts

class Person{
    name: string;
    age: number;

    constructor(name:string, age:number){
        this.name= name;
        this.age = age;
    }

    sayHello(){
        console.log(`${this.name}님 안녕하세요!`)
    }
}

const human = new Person("JJamVa", 27);
human.sayHello();

```

:::note

위와 같은 코드에서 class내에 사용할 필드 변수는 `변수명:타입`을 통해 선언하면된다.<br/>
단, class내에 변수 타입지정할 경우 앞에 `변수 선언 키워드(var, let, const)`를 작성하지 않는다.<br/>

`constructor`같은 경우, 객체 인스턴스 생성할 때 입력받을 parameter값의 타입을 지정하면 된다.<br/>

:::

## class 메소드(methods) type 지정

```ts
class Car{
    name: string;
    speed: number;

    constructor(name:string, speed:number){
        this.name= name;
        this.speed = speed;
    }

    maxSpeed(speed:number):void{
        console.log(`최고 속력은 ${speed+50}km/h 입니다.`);
    }

}

const car = new Car("산타페", 60);
car.maxSpeed(car.speed);// 최고 속력은 110km/h 입니다.
```

:::note

class 메소드(methods)와 같은 경우도 타입스크립트의 일반 함수 선언식과 같이 동일하게 parameter 및 return 타입을 정해주면 된다.<br/>

:::