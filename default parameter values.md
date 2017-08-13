## 默认参数    
在 **ES6** 中我们可以给一个函数设定一个默认值，当我们没有为函数传入参数的时候就会使用这个函数的默认值看如下的代码        
    
	function food(hotpot = '四川火锅',xiancai = '乌江榨菜') {
	  return `${hotpot} ${xiancai}`
	};
	console.log(food());//'四川火锅','乌江榨菜'    
	console.log(food('重庆火锅','老干妈榨菜'))//'重庆火锅','老干妈榨菜'    
