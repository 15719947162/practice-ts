(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sayHello = void 0;
function sayHello(name) {
    return "Hello from " + name;
}
exports.sayHello = sayHello;
},{}],2:[function(require,module,exports){
"use strict";
// ————————————————————————————— node中运行的配置 —————————————————————————————————————
//单文件输出
// function hello(compiler: string) {
//     console.log(`Hello from ${compiler}`);
// }
// hello("TypeScript");
Object.defineProperty(exports, "__esModule", { value: true });
//导入形式输出
// import { sayHello } from "./greet";
// console.log(sayHello("TypeScript"));
// ————————————————————————————— 浏览器中运行的配置 ———————————————————————————————————
var greet_1 = require("./greet");
function showHello(divName, name) {
    var elt = document.getElementById(divName);
    elt.innerText = greet_1.sayHello(name);
}
showHello("greeting", "TypeScript");
showHello("hhb", "js");
showHello("zl", "css");
},{"./greet":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvZ3JlZXQudHMiLCJzcmMvbWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztBQ0FBLFNBQWdCLFFBQVEsQ0FBQyxJQUFZO0lBQ2pDLE9BQU8sZ0JBQWMsSUFBTSxDQUFDO0FBQ2hDLENBQUM7QUFGRCw0QkFFQzs7O0FDRkQsaUZBQWlGO0FBQ2pGLE9BQU87QUFDUCxxQ0FBcUM7QUFDckMsNkNBQTZDO0FBQzdDLElBQUk7QUFDSix1QkFBdUI7O0FBRXZCLFFBQVE7QUFDUixzQ0FBc0M7QUFDdEMsdUNBQXVDO0FBRXZDLDhFQUE4RTtBQUM5RSxpQ0FBbUM7QUFFbkMsU0FBUyxTQUFTLENBQUMsT0FBZSxFQUFFLElBQVk7SUFDNUMsSUFBTSxHQUFHLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM3QyxHQUFHLENBQUMsU0FBUyxHQUFHLGdCQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDbkMsQ0FBQztBQUVELFNBQVMsQ0FBQyxVQUFVLEVBQUUsWUFBWSxDQUFDLENBQUM7QUFDcEMsU0FBUyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztBQUN2QixTQUFTLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiZXhwb3J0IGZ1bmN0aW9uIHNheUhlbGxvKG5hbWU6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIGBIZWxsbyBmcm9tICR7bmFtZX1gO1xyXG59IiwiLy8g4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCUIG5vZGXkuK3ov5DooYznmoTphY3nva4g4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCUXHJcbi8v5Y2V5paH5Lu26L6T5Ye6XHJcbi8vIGZ1bmN0aW9uIGhlbGxvKGNvbXBpbGVyOiBzdHJpbmcpIHtcclxuLy8gICAgIGNvbnNvbGUubG9nKGBIZWxsbyBmcm9tICR7Y29tcGlsZXJ9YCk7XHJcbi8vIH1cclxuLy8gaGVsbG8oXCJUeXBlU2NyaXB0XCIpO1xyXG5cclxuLy/lr7zlhaXlvaLlvI/ovpPlh7pcclxuLy8gaW1wb3J0IHsgc2F5SGVsbG8gfSBmcm9tIFwiLi9ncmVldFwiO1xyXG4vLyBjb25zb2xlLmxvZyhzYXlIZWxsbyhcIlR5cGVTY3JpcHRcIikpO1xyXG5cclxuLy8g4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCUIOa1j+iniOWZqOS4rei/kOihjOeahOmFjee9riDigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJRcclxuaW1wb3J0IHsgc2F5SGVsbG8gfSBmcm9tIFwiLi9ncmVldFwiO1xyXG5cclxuZnVuY3Rpb24gc2hvd0hlbGxvKGRpdk5hbWU6IHN0cmluZywgbmFtZTogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBlbHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkaXZOYW1lKTtcclxuICAgIGVsdC5pbm5lclRleHQgPSBzYXlIZWxsbyhuYW1lKTtcclxufVxyXG5cclxuc2hvd0hlbGxvKFwiZ3JlZXRpbmdcIiwgXCJUeXBlU2NyaXB0XCIpO1xyXG5zaG93SGVsbG8oXCJoaGJcIiwgXCJqc1wiKTtcclxuc2hvd0hlbGxvKFwiemxcIiwgXCJjc3NcIik7Il19
