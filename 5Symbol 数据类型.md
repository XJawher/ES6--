## Symbol   
Symbol 就是一个数据类型提供一个独一无二的值,不重复,不相等,永远都是独一无二的,当使用 Symbol.for(1) 的时候他首先会去找这个值是不是在全局注过,如果是在全局注册过的值那么就找到那个注册过的值,然后返回那个值,如果没有在全局注册过,那么就生成一个独一无二的值.在下面的代码中, **let a1 = Symbol.for(1);** 相当于在全局注册了一个 **Symbol.for(1)** 的值,而第二句 **let a2 = Symbol.for(1)** 就是在找全局注册的 **Symbol.for(1)** 这时候找到了并赋值给 a2 ,由于 Symbol 的值是独一无二的,所以他们俩是完全相等的.
	
	{
	  let a = Symbol();
	  let b = Symbol();
	  console.log(a === b)
	
	  let a1 = Symbol.for(1);
	  let a2 = Symbol.for(1);
	  console.log(a1 === a2)
	}
使用的情况,在使用的时候 Symbol 属性是不能被 entries 所遍历的.他有一个自己的遍历 API 叫做 Object.getOwnPropertySymbols()

	{
	  let a = Symbol.for('abc');
	
	  let obj = {
	    [a] : 123,
	    'abc':456,
	    'def':789
	  }
	  console.log('obj',obj)//obj { abc: 456, def: 789, [Symbol(abc)]: 123 }
	}
Symbol.for('abc') 这个属性值是可以作为一个对象的 keys 存在,当然在输出的时候也是作为 [Symbol(abc)]: 123 来存在的.而当以 Symbol 作为属性值的时候,你用 for in 或者 let of 是拿不到属性值的.这是一个比较特殊的知识点,他有自己独有的遍历属性的方法.

	{
	  let a = Symbol.for('abc');
	
	  let obj = {
	    [a] : 123,
	    'abc':456,
	    'def':789
	  }
	  console.log('obj',obj)//obj { abc: 456, def: 789, [Symbol(abc)]: 123 }
	
	  for(let [keys,values] of Object.entries(obj)){
	    console.log([keys,values])
	  }
	  // obj { abc: 456, def: 789, [Symbol(abc)]: 123 }
	  // [ 'abc', 456 ]
	  // [ 'def', 789 ]
	}
上面的代码是无法拿到 Symbol 的属性的,这里我们不能用常规的 for in 或者 let of 取得他的属性值,这里用 **Object.getOwnPropertySymbols()** 用这个方法取这个值,他拿到的值是一个数组,用数组的方法我们可以用数组的 forEach 来循环.    
同时既能拿到 Symbol 的属性,又能拿到 非 Symbol 属性的方法就是  **Reflect.ownKeys()**      

	{
	  let a = Symbol.for('abc');
	
	  let obj = {
	    [a] : 123,
	    'abc':456,
	    'def':789
	  }
	  console.log('obj',obj)//obj { abc: 456, def: 789, [Symbol(abc)]: 123 }
	
	  for(let [keys,values] of Object.entries(obj)){
	    console.log('keys,values   ',[keys,values])
	  }
	  // obj { abc: 456, def: 789, [Symbol(abc)]: 123 }
	  // [ 'abc', 456 ]
	  // [ 'def', 789 ]
	  console.log('getOwnPropertySymbols   ',Object.getOwnPropertySymbols(obj))
	
	  console.log('Reflect.ownKeys()   ',Reflect.ownKeys(obj))
	} 
	keys,values    [ 'abc', 456 ]
	keys,values    [ 'def', 789 ]
	getOwnPropertySymbols    [ Symbol(abc) ]
	Reflect.ownKeys()    [ 'abc', 'def', Symbol(abc) ]