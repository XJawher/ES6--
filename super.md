## super      
[**super|MDN**](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/super)这是 **MDN** 上对于 super 的定义，比较详细，我这里就简单的说一个例子    
现在我们 **food** 对象中有了 **dinner** 的 getDrink() 返回的值 tea，现在想给 food 新添加一个值 beer，要求要覆盖掉已经在 food 中存在的 **dinner** 中 getDrink()，并且还要保留 **dinner** 中 getDrink() 返回的值 tea，也就是 food 最后要返回 tea + beer 具体做法看下面的代码
   
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
	let food = {
	  __proto__ : dinner,    
      getDrink(){
	    return super.getDrink() + 'beer'
	  }        
	}       
	
	console.log(food.getDrink());//tea + beer   