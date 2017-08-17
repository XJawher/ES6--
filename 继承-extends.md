##  extends 继承      
       
	class foods {
	  constructor(bread,drink) {
	    this.bread = bread;
	    this.drink = drink;
	  }
	  eat () {
	    return `今天享受${this.bread}和${this.drink}`
	    // console.log( `今天享受${this.bread}和${this.drink}`)
	  }
	}
	
	class dinner extends foods {
	  constructor(bread,drink){
	    super(bread,drink);
	  }
	}
	let li = new dinner('writeBread','beer');
	console.log(li.eat());//今天享受writeBread和beer    
super 他可以去调用父类中的东西    
由于 **dinner** 继承了 **foods** 中的属性，所以他就可以调用 **foods** 中的 **eat** 方法