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
	