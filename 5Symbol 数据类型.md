## Symbol   
Symbol 就是一个数据类型提供一个独一无二的值,不重复,不相等,永远都是独一无二的
	
	{
	  let a = Symbol();
	  let b = Symbol();
	  console.log(a === b)
	
	  let a1 = Symbol.for(1);
	  let a2 = Symbol.for(1);
	  console.log(a1 === a2)
	}
使用的情况,在使用的时候 Symbol 属性是不能被 entries 所遍历的.他有一个自己的遍历 API 叫做 Object.getOwnPropertySymbols()
