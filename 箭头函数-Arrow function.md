## 箭头函数-Arrow functions    
箭头函数，**`=>`**    
    
    let food = Bread => Bread;//ES6 写法    
	var food = function food(Bread) {
	  return Bread;
	}//普通的写法     
当返回的是多个参数的时候也是一样的，在 **`=>`** 左右两边加上要添加的参数    
    
    let food = Bread + hotpot=> Bread + hotpot;//ES6 写法    
	var food = function food(Bread,hotpot) {
	  return Bread + hotpot;
	}//普通的写法      
当函数是要返回一些复杂的逻辑操作的时候，箭头函数可以这么写    
    
    let food = Bread + hotpot=> {
	  Bread + hotpot;
	}        
在大括号中写具体的代码
  