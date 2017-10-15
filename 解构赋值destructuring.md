解构是 **ES6** 的一个新的语法，意思就是分解一个东西的结构。    
## 解构数组      
例如我们有这样一段代码    
     
	function food() {
	  return ['火锅','腊肉','咸菜'，'烤肉'];
	}     
	var temp = food;    
	    hotpot = temp[0];larou = temp[1];xiancai = temp[2]; kaorou = temp[3];    
	console.log(hotpot,larou,xiancai,kaorou);//火锅,腊肉,咸菜,烤肉     
上面的代码就是以前的时候用的方法。我们把这个 food() 返回的值赋值给 temp 这个变量，然后再从 temp 中拿到对应的值。    
在 **ES6** 时代我们用解构来处理类似的事件。    
     
	function food() {
	  return ['火锅','腊肉','咸菜'，'烤肉'];
	}     
	let [hotpot,larou,xiancai,kaorou] = food();    
	console.log(hotpot,larou,xiancai,kaorou);//火锅,腊肉,咸菜,烤肉     
这样就很轻松的解决了上述的问题。     
## 解构对象    
现在有这样一段代码      
      
	function food() {
	  return {hotpot:'火锅',larou:'腊肉',xiancai:'咸菜',kaorou:'烤肉'};
	}         
	let {hotpot:hotpot_,larou:larou_,xiancai:xiancai_,kaorou:kaorou_}     
	console.log(hotpot_,larou_,xiancai_，kaorou_);  //火锅,腊肉,咸菜,烤肉     
解构对象时， let 对象中的 `hotpot_` 是我们自己定义的变量，用来存放 `food()` 解构完返回的 `hotpot` 的值。   
## 补充内容    
 解构赋值的分类有 数组解构,对象解构,字符串解构,布尔解构,函数参数解构    
如果解构赋值在左右的数量上没有成功的配对的话,那么没有配对的变量就会以 undefined 来设置为默认的参数.
### 数组解构
	{
	  let a,b,rest;
	  [a,b] = [1,2];
	  console.log(a,b)
	}    
	
	{
	  let a,b,rest;
	  [a,b,...rest] = [1,2,3,4,5,5,6,6,6];
	  console.info(a,b,rest)
	} 
解构赋值的用途之一--变量交换    

	{
	  let a = 2,b = 1,rest = 0;
	  [a,b] = [b,a]
	  console.log(a,b)
	}
	
	{
	  function f() {
	    return [1,2]
	  }
	  let a,b;
	  [a,b] = f();
	  console.log(a,b)
	}
用途二选择顺序数据

	{
	  function f(params) {
	    return [1,23,4,5,6,7]
	  }
	  let a,b;
	  [a,,,,b] = f();
	  console.log(a,b)
	}

### 对象解构   
使用的时候左边是对象右边同样的也是要一个对象.

	{
	  let a,b,rest;
	  ({a,b} = {a : 3,b : 4});
	  console.info(a,b)
	} 

一个比较实用的也是比较常见的用途,在后端给前端返回一个数据以后,那么这个数据的格式大多是 JSON 格式的数据,有时候数据会嵌套好几层,数据在多层嵌套的时候要拿某几个数据的时候可以用解构的方式来搞定数据的读取   

	
	{
	  let postData = {
	    title:"abs",
	    result:[{
	      title:'aaa',
	      result2:[{
	        title:'sss'
	      }]
	    }]
	  }
	  let {title:title1,result:[{title:title2}],result:[{result2:[{title:title3}]}]} = postData;
	  console.log(title1,title2,title3)
	}
### 字符串解构
### 布尔解构 
### 函数参数解构 
### 数字解构	 