// ————————————————————————————— node中运行的配置 —————————————————————————————————————
//单文件输出
// function hello(compiler: string) {
//     console.log(`Hello from ${compiler}`);
// }
// hello("TypeScript");

//导入形式输出
// import { sayHello } from "./greet";
// console.log(sayHello("TypeScript"));

// ————————————————————————————— 浏览器中运行的配置 ———————————————————————————————————
import { sayHello } from "./greet";

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = sayHello(name);
}

showHello("greeting", "TypeScript");
showHello("hhb", "js");
showHello("zl", "css");