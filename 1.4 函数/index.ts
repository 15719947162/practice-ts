//函数类型

/**
 * 为函数定义类型
 */
//为每个函数的参数添加类型，函数本身添加返回值类型
function add(x: number, y: number): number {
    return x + y;
}
//完整的函数书写，函数类型包含两部分：参数类型和返回值类型。 
let myAdd: (x: number, y: number) => number = function (x: number, y: number): number { return x + y; };
//只要参数类型是匹配的，那么就认为它是有效的函数类型，而不在乎参数名是否正确。
//对于返回值，我们在函数和返回值类型之前使用=>符号。
let myAdd1: (baseValue: number, increment: number) => number = function (x: number, y: number): number { return x + y; };

/**
 * 可选参数和默认参数
 * TypeScript里的每个函数参数都是必须的。即传递给一个函数的参数个数必须与函数期望的参数个数一致。
 */
//用?来表示可选参数，可传可不传，但可选的参数必须放在必选参数后面传入。
function buildName(firstName: string, lastName?: string) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}
//为参数提供一个默认值，叫有默认初始化值的参数
function buildName1(firstName: string, lastName = "Smith") {
    return firstName + " " + lastName;
}

/**
 * 剩余参数
 * 可以把所有参数收集到一个变量里，剩余参数会被当做个数不限的可选参数。 可以一个都没有，同样也可以有任意个。 编译器创建参数数组，名字是你在省略号（ ...）后面给定的名字
 */
function buildName2(firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ");
}