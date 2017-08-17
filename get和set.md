## get 得到东西的方法   
	对应的 **get** 请看下面的代码    
	 class dinner { 
	  constructor(food = 'hotpot') { 
	    this.food = food;  
	    this.dish = [];
	  } 
	
	  get foods() {
	    return this.dish;
	  }
	  set foods(dish) {
	    this.dish.push(dish)
	  }
	} 
	let cook = new dinner();
	console.log(cook.foods = 'beer');//set > beer
	console.log(cook.foods = 'tea');//set >  tea
	console.log(cook.foods);//get > ['beer','tea']
     


## set 设置东西的方法