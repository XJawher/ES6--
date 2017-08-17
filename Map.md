## Map{}    
是一种新的数据存储的结构，相比 object 的 **字符-键值** 而言，Map 可以做到 **值-值** 不限制键的选择。Map 比 Object 更加的适合 键值对的选择    
     
	let food = new Map();
	let fruit = {},cook = function() {},drink = '饮品';   
	food.set(fruit,'watermalone');
	food.set(cook,'apple');
	food.set(drink,'doughnut');
	console.log(food);   
	结果就是：    
	Map {
	  {} => 'watermalone',
	  [Function: cook] => 'apple',
	  '饮品' => 'doughnut' }    
通过 **`food.size`** 和 **`food.get()`** 得到这个 Map 中包含的数目和得到键对应的值   
							
	console.log(food.size);//3
	console.log(food.get(cook));//apple   
通过 **`delete`** 删除一个项目    
     
	food.delete(drink);
	console.log(food.has(drink));//false   
遍历 Map 有四种方法    
Map 结构原生提供三个遍历器生成函数和一个遍历方法。
	
>keys()：返回键名的遍历器。   
>values()：返回键值的遍历器。   
>entries()：返回所有成员的遍历器。   
>forEach()：遍历 Map 的所有成员。       

	let food = new Map();
	let fruit = {},cook = function() {},drink = 'tea';   
	food.set(fruit,'watermalone');
	food.set(cook,'apple');
	food.set(drink,'doughnut');
	console.log(food);
	console.log(food.size);
	console.log(food.get(cook));  
	console.log(food.keys());//MapIterator { {}, [Function: cook], 'tea' }
	console.log(food.values());//MapIterator { 'watermalone', 'apple', 'doughnut' }
	console.log(food.entries()); 
	//MapIterator {
	  [ {}, 'watermalone' ],
	  [ [Function: cook], 'apple' ],
	  [ 'tea', 'doughnut' ] }    
	
当然 Map 也可以和数组，对象，JSON之间相互转化，这个以后有时间了再写一个	
	
	
