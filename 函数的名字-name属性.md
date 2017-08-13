ES6 为函数提供了一个新的属性，**name**，使用这个属性我们可以得到函数的 **name**     
       
	function food() {
	}          
	console.log(food.name);//food    
也可以使用匿名函数的方法       
       
	let food = function () {
	}          
	console.log(food.name);//food      
或者这样也是可以的   
       
	let food = function Hotpot() {
	}          
	console.log(food.name);//Hotpot