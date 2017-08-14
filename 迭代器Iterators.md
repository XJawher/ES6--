## 迭代器    
每一次执行的时候就会返回一个对象 **`{value:xx,done:ture/false}`** 第一个 **value** 就是迭代的时候要返回的值，后面的 **done** 就是返回一个 布尔值，迭代结束返回 true，否则就是 false   
[Iterator|MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Iterator): Iterator 函数是一个 SpiderMonkey 专有特性，并且会在某一时刻被删除。为将来使用的话，请考虑使用 for..of 循环和  迭代协议。
Iterator 函数返回一个对象，它实现了遗留的迭代协议，并且迭代了一个对象的可枚举属性。   
     
	function HavingDinner (foods){
      let i = 0;
	  return {
	    next(){
          let done = (i>= foods.length);
		  let value = !done ?foods[i++]:undefined;
		  
		  return {
		    value:value,
			done:done
          }  
        } 
	  }
	}    
	let zhangsan = HavingDinner(['Bread','hotpot','wine']);   
	console.log(HavingDinner.next());//{value:Bread,done:false}
	console.log(HavingDinner.next());//{value:hotpot,done:false}
	console.log(HavingDinner.next());//{value:wine,done:false}
	console.log(HavingDinner.next());//{value:undefined,done:true}
	