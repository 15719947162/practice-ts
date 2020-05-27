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
let list:number[] = [1,2,3];
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
 * 6. any
 * ts新增类型，any类型的变量类型检查器不检查，一般用于动态约束某变量，
 */
let any:any = 1;
any = true;
any = 'abc';
any = [1,"2",true];
