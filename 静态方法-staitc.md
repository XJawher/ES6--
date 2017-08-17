## 静态的方法    
所谓的静态的方法就是不用去实例化就可以直接去操作的对象    
      
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
	
	  static cook(num) {//静态方法不需要实例化就可以使用
	    console.log(`今天吃饭的人数是：${num}人`)
	  }
	
	} 
	let cook = new dinner();    
	dinner.cook(8);//今天吃饭的人数是：8人

