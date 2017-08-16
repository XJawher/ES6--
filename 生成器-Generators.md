## Generators 生成迭代器    
手工的创建迭代器有点麻烦，我们可以用自动的方式 **Generators** 。    
**Generators** 的语法就是在 **`function*`** 也就是在 **function** 加一个 * 号    
     
	let dinner = function* (foods){
	  for(var i = 0;i < foods.length;i++){
	    yield foods[i];	
	  }
	}    
	let eat = dinner(['hotpot','beer','cookie'])    
	console.log(eat.next());//{value:"hotpot",done:false}    	
	console.log(eat.next());//{value:"beer",done:false}    
	console.log(eat.next());//{value:"cookie",done:false}    
	console.log(eat.next());//{value:undefined,done:true}           
或者也可以这样写一个简单的迭代器   
     
	function* dinner(){
	  yield 'hotpot';    
	  yield 'beer';
	  yield 'cookie';    
	}//这就是一个简单的生成器，第一次调用 next 返回 hotpot，第二次返回 beer 第三次返回 cookie 第四次返回 undefined     
	let foods =  dinner();//现在 foods 就是一个迭代器    
	console.log(foods.next());//{value:"hotpot",done:false}    	
	console.log(foods.next());//{value:"beer",done:false}    
	console.log(foods.next());//{value:"cookie",done:false}    
	console.log(foods.next());//{value:undefined,done:true}   
 
    
