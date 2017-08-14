##  `__proto__`     
    __proto__ 前面两个下划线后面两个下划线    
ES6 中的 `__proto__` 可以来得到或者设置对象中的 prototype 。   
   
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
	  __proto__ : dinner        
	}       
	console.log(food);//tea   
	console.log(Object.getPrototypeOf(food) === dinner)//true    
使用  __proto__ 去设置对象的 prototype 可以这样操作    
   
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
	  __proto__ : dinner        
	}       
	food.__proto__ =  breakfast;    
	console.log(food);//milk   
	console.log(Object.getPrototypeOf(food) === breakfast)//true        
  
