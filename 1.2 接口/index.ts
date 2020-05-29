//接口是对一个对象里的某些属性和方法进行约束，用interface声明

/**
 * 基本接口
 */
//这里定义了一个LabelledValue的接口
interface LabelledValue {
    label: string;
}
//这里在printLabel函数接受一个LabelledValue类型的参数
function printLabel(labelledObj: LabelledValue) {
    console.log(labelledObj.label);
}
let myObj = { size: 10, label: "Size 10 Object" };
//类型检查器不会去检查属性的顺序，但必须相应的属性存在并且类型也是对的
printLabel(myObj);

/**
 * 可选属性
 * 传入函数的参数对象中只有部分属性赋值了。
 */
//定义了一个SquareConfig接口，其中color和width都是可选属性
interface SquareConfig {
    color?: string;
    width?: number;
}
//定了一个createSquare，参数是SquareConfig约束，函数的返回值是一个{ color: string; area: number }对象
function createSquare(config: SquareConfig): { color: string; area: number } {
    let newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
//当调用createSquare函数传参后，即使只有color满足条件，依旧可以通过类型检查器，说明带？的可选属性可有可无
let mySquare = createSquare({ color: "black" });
let mySquare1 = createSquare({});
//可选属性的好处之一是可以对可能存在的属性进行预定义。
//好处之二是可以捕获引用了不存在的属性时的错误。
//意思是定义可选属性后，当你调用一个对象没有的属性时，不会再返回undefined，而是直接报错。
//所以使用了可选属性后，必须确定你的属性方法，不能在约束后再动态添加属性或方法

/**
 * 只读属性
 * 一些对象属性只能在对象刚刚创建的时候修改其值，可以在属性名前用 readonly来指定只读属性
 */
//定义了一个Point接口
interface Point {
    readonly a: number;
    readonly b: number;
}
//当初始化时可以对a,b属性进行赋值，之后的p1操作只能是读取a,b，不能修改。
let p1: Point = { a: 10, b: 20 };
//数组创建不可变
let rList: ReadonlyArray<number> = [1, 2, 3, 4];
//之后的rList无法再改变,对rList的增删改方法会全部报错

/**
 * 额外的属性检查
 * 如果一个对象除了带有一两个固定属性外，还带有任意数量的其他属性
 */
interface SquareConfig {
    color?: string;
    width?: number;
    [propName: string]: any;
}
//这样就会对新增的所有动态属性和方法进行检查

/**
 * 函数类型
 * 给接口定义一个调用签名。它就像是一个只有参数列表和返回值类型的函数定义。参数列表里的每个参数都需要名字和类型。
 */
interface SearchFunc {
    //前面是函数参数的名字和类型 : 后面是函数的返回值
    (source: string, subString: string): boolean;
}
let mySearch: SearchFunc;
mySearch = function (source: string, subString: string) {
    let result = source.search(subString);
    return result > -1;
}
//函数的参数名不需要与接口里定义的名字相匹配，只要求对应位置上的参数类型是兼容的。
let mySearch1: SearchFunc;
mySearch1 = function (src: string, sub: string): boolean {
    let result = src.search(sub);
    return result > -1;
}
//也可以不写返回值类型和参数类型
let mySearch2: SearchFunc;
mySearch2 = function (src, sub) {
    let result = src.search(sub);
    return result > -1;
}

/**
 * 可索引的类型
 * 可索引类型具有一个‘索引签名’，它描述了对象索引的类型，还有相应的索引返回值类型。TypeScript支持两种索引签名：字符串和数字。
 */
//定义了一个StringArray接口
interface StringArray {
    [index: number]: string;
}
interface NewObject {
    [key: string]: any;
}
//可以同时使用两种类型的索引，但是数字索引的返回值必须是字符串索引返回值类型的子类型。
interface AllObject {
    [key: string]: any;
    [index: number]: string;
}
//给索引加只读属性，就不可修改其值
interface ReadonlyStringArray {
    readonly [index: number]: string;
}

/**
 * 类类型
 * 可索引类型具有一个‘索引签名’，它描述了对象索引的类型，还有相应的索引返回值类型。TypeScript支持两种索引签名：字符串和数字。
 */
//设置一个ClockInterface接口
interface ClockInterface {
    currentTime: Date;
}
//声明一个类Clock用ClockInterface约束
class Clock implements ClockInterface {
    currentTime: Date;
    constructor(h: number, m: number) { }
}
//可以在接口中描述一个方法，在类里实现它，
interface ClockInterface1 {
    currentTime: Date;
    setTime(d: Date);
}
//只要在接口中描述的方法，在其类中必须实现。
class Clock1 implements ClockInterface1 {
    currentTime: Date;
    setTime(d: Date) {
        this.currentTime = d;
    }
    constructor(h: number, m: number) { }
}