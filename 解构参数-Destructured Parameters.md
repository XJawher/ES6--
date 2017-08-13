##解构参数-Destructured Parameters     
使用解构对象的方法我们很容易为函数设定一个对象的参数，具体看下面的代码    
       
	function food(Bread,Drink,{Hotpot,Girl} = {}) {//这里的 {} 的意思就是不指定对象的内容，空对象的话不会报错
		console.log(Bread,Drink,Hotpot,Girl);
	}    
	food('白面包','啤酒',{Hotpot:'四川火锅',Girl:'没有女朋友敲个屁的代码！！！找对象去'})   
这时候输出的就是 **`白面包，啤酒，四川火锅，没有女朋友敲个屁的代码！！！找对象去`**