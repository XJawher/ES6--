## Set 和 Map 数据结构    
分类有两个大类,分别是 Set 和 Map,其中 Set 又分为 Set 和 WeakSet 方法,Map 又分为 Map 和 WeakMap 方法.    
### set   
	{
	  let list = new Set();
	  list.add(1);
	  list.add(2);
	  console.log('size   ',list.size)
	}
上面的代码中的 size 就相当于数组中的 length 表示他这个 Set 数据结构的长度.   
对于 Set 最大的用途就是去重,这是一个非常重要的特性.平时数组的去重都是自己手动写,现在有了 Set 就不需要了,直接一 Set 就可以完成去重的工作, 是一件非常棒的事情.不过 Set 在去重的时候不会做数据类型的转换,具体看下面的代码   

	{
	  let list = new Set();
	  list.add(1);
	  list.add(2);
	  console.log('size   ',list.size)
	
	  let arr = [1,2,3,4,5,6,4,3,2,1,'1','2','3'];
	  let list2 = new Set(arr);
	  console.log('list2  ',list2)//list2   Set { 1, 2, 3, 4, 5, 6, '1', '2', '3' }
	}
### Map 
map 的数据特性就是任何的数据类型都可以作为 key 不管是数组还是对象还是字符等等的数据类型都是可以做为一个 key 值存在的.    

	{
	  //map 
	  let arr = [123];
	  let map = new Map();
	  map.set(arr,456);
	  console.info('map   ',map)    //map    Map { [ 123 ] => 456 }
	}  
同样的 map 和 set 也是有 delete has clear 的方法,关于他们俩的遍历就是类似的, entries forEach keys values  

	delete(value)：删除某个值，返回一个布尔值，表示删除是否成功。   
	has(value)：返回一个布尔值，表示该值是否为Set的成员。   
	clear()：清除所有成员，没有返回值。
	
	{
	  // set  的一些方法,delete has entires clear keys values 
	  let arr = ['delete','has', 'entires', 'clear', 'keys', 'values'];
	  let list = new Set(arr);
	
	  console.log('has  ',list.has('has'))
	  console.log('delete  ',list.delete('has'),list)
	  console.log('clear  ',list.clear(),list)
	  console.log('keys  ',list.keys())
	  console.log('values  ',list.values())
	  console.log('entries  ',list.entries())
	}
Map 和 Set 是相似的,具体的没有什么特殊的地方.