## Object.setPrototypeOf()      
>Object.setPrototypeOf() 方法设置一个指定的对象的原型 ( 即, 内部[[Prototype]]属性）到另一个对象或  null。
 
>警告: 由于现代 JavaScript 引擎优化属性访问所带来的特性的关系，更改对象的 [[Prototype]]在各个浏览器和 JavaScript 引擎上都是一个很慢的操作。其在更改继承的性能上的影响是微妙而又广泛的，这不仅仅限于 obj.__proto__ = ... 语句上的时间花费，而且可能会延伸到任何代码，那些可以访问任何[[Prototype]]已被更改的对象的代码。如果你关心性能，你应该避免设置一个对象的 [[Prototype]]。相反，你应该使用 Object.create()来创建带有你想要的[[Prototype]]的新对象。
语法Edit 
[Object.setPrototypeOf](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf)

Object.setPrototypeOf(obj, prototype)     
请看下面的代码   
   
	let breakfast = {
	  getDrink() {
	    return:'milk';
      }
	};
	let dinner = {
	  getDrink() {
	    return:'tea';
      }
	};    
	let HavingDinner = Object.create(breakfast);
	console.log(HavingDinner.getDrink());//milk     
	console.log(Object.getPrototypeOf(HavingDinner) === breakfast)//true    
	//现在重新设置一下 HavingDinner 对象的 prototype 用 Object.setPrototypeOf()方法   
	Object.setPrototypeOf(HavingDinner,dinner);    
	console.log(HavingDinner.getDrink());//tea    
	console.log(Object.getPrototypeOf(HavingDinner) === dinner)//true      
Object.setPrototypeOf(obj, prototype) 这个方法使用的时候要注意的地方就是 obj 代表 **HavingDinner**，prototype 代表 **dinner**。不可以搞混淆了