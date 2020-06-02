/**
 * 类
 */
class Greeter {
    //类的属性
    greeting: string;
    //类的构造器
    constructor(message: string) {
        this.greeting = message;
    }
    //类的方法
    greet() {
        return "Hello, " + this.greeting;
    }
}
//new构造了Greeter类的一个实例
let greeter = new Greeter("world");

/**
 * 继承
 * 派生类包含了一个构造函数，它必须调用 super()，它会执行基类的构造函数。 
 * 而且，在构造函数里访问this的属性之前，我们一定要调用 super()。这个是TypeScript强制执行的一条重要规则。
 */
//定义了一个类Animal
class Animal {
    move(distanceInMeters: number = 0) {
        console.log(`Animal moved ${distanceInMeters}m.`);
    }
}
//定义了一个类Dog，它继承了Animal的属性和方法
class Dog extends Animal {
    bark() {
        console.log('Woof! Woof!');
    }
}
const dog = new Dog();
dog.bark();
dog.move(10);
dog.bark();
//类Dog就是类Animal的派生类也叫子类，类Animal是类Dog的基类也叫超类

/**
 * 公共，私有与受保护的修饰符
 */
//public
//所有的成员都默认为 public。表示公共的属性或方法
class Animal1 {
    public name: string;
    public constructor(theName: string) { this.name = theName; }
    public move(distanceInMeters: number) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

//private
//当成员被标记成 private时，它就不能在声明它的类的外部访问。
class Animal2 {
    private name: string;
    constructor(theName: string) { this.name = theName; }
}
//new Animal2("Cat").name; // 错误: 'name' 是私有的.

//protected
//这个类不能在包含它的类外被实例化，但是能被继承。

//readonly
//关键字将属性设置为只读的。 只读属性必须在声明时或构造函数里被初始化
class Octopus {
    readonly name: string;
    readonly numberOfLegs: number = 8;
    constructor (theName: string) {
        this.name = theName;
    }
}
let dad = new Octopus("Man with the 8 strong legs");
//dad.name = "Man with the 3-piece suit"; // 错误! name 是只读的.
//用参数属性改写下
class Octopus1 {
    readonly numberOfLegs: number = 8;
    constructor(readonly name: string) {
    }
}
//仅在构造函数里使用readonly name: string参数来创建和初始化name成员，我们把声明和赋值合并至一处。

/**
 * 存取器
 * Ts支持通过getters/setters来截取对对象成员的访问
 */
class Employee {
    private _fullName: string;

    // get fullName(): string {
    //     return this._fullName;
    // }

    // set fullName(newName: string) {
    //     if (passcode && passcode == "secret passcode") {
    //         this._fullName = newName;
    //     }
    //     else {
    //         console.log("Error: Unauthorized update of employee!");
    //     }
    // }
}

/**
 * 静态属性
 * 这些属性存在于类本身上面而不是类的实例上。
 */
 //定义了一个Grid类，
class Grid {
    //静态origin属性
    static origin = {x: 0, y: 0};
    //calculateDistanceFromOrigin方法
    calculateDistanceFromOrigin(point: {x: number; y: number;}) {
        //每个实例想要访问这个属性的时候，都要在origin前面加上类名。用Grid.来访问静态属性
        let xDist = (point.x - Grid.origin.x);
        let yDist = (point.y - Grid.origin.y);
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    }
    //构造器
    constructor (public scale: number) { }
}

/**
 * 抽象类
 * 抽象类做为其它派生类的基类使用。 它们一般不会直接被实例化。abstract关键字是用于定义抽象类和在抽象类内部定义抽象方法
 */
//定义抽象类Animal3
abstract class Animal3 {
    //定义抽象方法makeSound,相当于方法签名
    abstract makeSound(): void;
    constructor(public name: string) {
    }
    move(): void {
        console.log('roaming the earch...');
    }
}
//抽象类中的抽象方法不包含具体实现并且必须在派生类中实现。 
class Cat extends Animal3{
    constructor() {
        super('Accounting and Auditing'); // 在派生类的构造函数中必须调用 super()
    }
    //抽象方法的具体实现
    makeSound(): void{
        console.log('makeSound...');
    }
    catch(data): void{
        console.log('catch...'+data);
    }
}
