## class   
现在我们可以在 ES6 中愉快的使用 class 来定义一个类了   
      
	  class Point { 
	    constructor(x = 'hotpot',y = 'beer') { 
	      this.x = x; this.y = y; 
	    } 
	    toString() { 
	      return this.x + ':' + this.y; 
	    } 
	  } 
	  let point = new Point('hotpot222','beer6666'); 
	  console.log(point.toString());//hotpot222:beer6666    
下一节写在类里面定义 get 和 set 的方法