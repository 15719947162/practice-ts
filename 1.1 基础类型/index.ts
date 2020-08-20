//ts作为js的超集，对js的基本类型进行了扩展
//冒号后面是对冒号前面的一种类型约束，表示冒号前面的变量所能接受的数据类型

/**
 * 1. 布尔值
 * 和js一致，就是true和false
*/
let isFalse:boolean = false;
let isTrue:boolean = true;

/** 
 * 2. 数字
 * 和js基本一致，都是浮点型，类型都是number，支持2,8,10,16进制
 */
let number:number = 18;
let number1:number = 11111;
let number2:number = 0o744;
let number3:number = 0xf00d;

/** 
 * 3. 字符串
 * 和js基本一致，用单/双引号表示字符串
 */
let string:string = '1111';
let string1:string = "胡寒冰";
let string2:string = `我是${string1}`;
let string3:string = `我今年${number}岁`;
console.log(string3);
/** 
 * 4. 数组
 * 和js基本一致，表示方法有两种
 * 第一种：类型后加[],例如number[]
 * 第二种：数组泛型，例如Array<number>
 */
let numberList:number[] = [1,2,3];
let stringList:string[] = ['1','2','3'];
let list1:Array<number> = [1,2,3];


/** 
 * 5. 元祖
 * ts新增类型，表示一个已知元素数量和类型的数组，各元素的类型不必相同
 */
let array:[number,string] = [1,'1'];
let array1:[boolean,Array<number>] = [true,[1,2,3]];

/** 
 * 6. 枚举
 * ts新增类型，定义一组值，便于用过枚举的值获取他的元素编号，也可以通过元素编号获取他的值
 * 默认情况下，从0开始为元素编号，也可以手动指定，后面的依据顺序往下排
 */
enum People {hhb,zl = 10,zb,rl=100,zyj}
let people1:number = People.hhb;
let people2:string = People[1];
let people3:People = People.zb;
let people4:People = People.zyj;
console.log(people1,people2,people3,people4);

/** 
 * 7. any
 * ts新增类型，any类型的变量类型检查器不检查，一般用于动态约束某变量，
 */
let any:any = 1;
any = true;
any = 'abc';
any = [1,"2",true];

/** 
 * 8. void
 * ts新增类型，与any类型相反，表示没有任何类型，一般用于函数没有返回值,当变量使用时只能赋予undefined或null
 */
function func():void{
   //TODO   
}
let hhb:void = undefined;
let hhb1:void = null;

/** 
 * 9. null和undefined
 * 和js基本一致，他们两个各自的类型分别是null和undefined
 */
let dog:null = null;
let dog1:undefined = undefined;
//null和undefined是所有类型的子类型
//当指定了--strictNullChecks标记时，null和undefined只能赋值给void和它们各自。这是非常有必要的。
//传入一个 string或null或undefined，你可以使用联合类型string | null | undefined。

/** 
 * 10. never
 * ts新增类型，表示的是那些永不存在的值的类型。例如：never类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型
 * 变量也可能是 never类型，当它们被永不为真的类型保护所约束时。
 * never类型是任何类型的子类型，也可以赋值给任何类型；没有类型是never的子类型或可以赋值给never类型（除了never本身之外）。 即使 any也不可以赋值给never。
 */
// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
    throw new Error(message);
}
// 推断的返回值类型为never
function fail() {
    return error("Something failed");
}
// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
    //无限循环
    while (true) {
    }
}

/** 
 * 11. Object
 * 和js不一样，表示非原始类型，也就是除number，string，boolean，symbol，null或undefined之外的类型。
 */
let object:object = {name:"1",age:2};
let object1:object = new Object({name:'1',age:2});
let object2:object = [1,2,3,4];
let object3:object = ['1',2,true];

//类型断言
//第一种
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;
//第二种
let someValue1: any = "this is a string";
let strLength1: number = (someValue1 as string).length;
