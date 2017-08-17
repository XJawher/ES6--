## Set 就是一堆东西的集合      
set 类似于数组，但是 set 中不能有重复的东西。  
set 的属性中有 **constructor** 和 **size**。 set 有四个方法，分别是 **add,delete,has,clear** 对应着添加，删除，是否拥有，清除         
  
	add(value)：添加某个值，返回Set结构本身。   
	delete(value)：删除某个值，返回一个布尔值，表示删除是否成功。   
	has(value)：返回一个布尔值，表示该值是否为Set的成员。   
	clear()：清除所有成员，没有返回值。      
写段代码看看有关 Set 的用法    
     
	let set = new Set();   
	['milk','meal','tea','hotpot','wine','beer','meal','hotpot'].forEach(x => set.add(x));
	console.log(set)//Set { 'milk', 'meal', 'tea', 'hotpot', 'wine', 'beer' }
打印出来的值很有意思，这就是去重啊，他把重复的 **hotpot** 和 **meal** 给去掉了，想一下有这样的场景，后端给你返回一大堆的数据，其中有好多是重复的数据，现在要去重，以前的方法之一是建一个新的空数组，然后循环判断，看这个值在空数组中是不是存在，如果在就不放进去，不在就放进去，现在就很容易搞定这样的一个场景了。  
接着来看看上面的四个方法。    
    
	let set = new Set();   
	['milk','meal','tea','hotpot','wine','beer','meal','hotpot'].forEach(x => set.add(x));
	
	
	set.add('老干妈');
	console.log(set)//Set { 'milk', 'meal', 'tea', 'hotpot', 'wine', 'beer', '老干妈' }
	console.log(set.has('tea'));//true
	set.delete('meal');
	console.log(set);//Set { 'milk', 'tea', 'hotpot', 'wine', 'beer', '老干妈' }
	console.log(set.size);//6
	set.clear();
	console.log(set);//Set {}
## const array = Array.from(items);    
Array.from 可以把 Set 转化为数组   
     
	let set = new Set();   
	['milk','meal','tea','hotpot','wine','beer','meal','hotpot'].forEach(x => set.add(x));
	
	
	set.add('老干妈');
	console.log(set)//Set { 'milk', 'meal', 'tea', 'hotpot', 'wine', 'beer', '老干妈' }
	console.log(set.has('tea'));//true
	set.delete('meal');
	console.log(set);//Set { 'milk', 'tea', 'hotpot', 'wine', 'beer', '老干妈' }
	console.log(set.size);//6
	let Arr = Array.from(set);
	console.log(Arr)//[ 'milk', 'tea', 'hotpot', 'wine', 'beer', '老干妈' ] 去重新思路