一般的数据结构都是有着 增查改删 这四个属性的我们在这里通过分别对比他们的增查改删来完成 **map 与 数组的对比**还有 **set 与 对象的对比**
## map 与 数组的对比
map 的增加元素是 set,而数组的操作数据的方法有   
unshift：将参数添加到原数组开头，并返回数组的长度   
pop：删除原数组最后一项，并返回删除元素的值；如果数组为空则返回undefined   
push：将参数添加到原数组末尾，并返回数组的长度   
concat：返回一个新数组，是将参数添加到原数组中构成的   
splice(start,deleteCount,val1,val2,...)：从start位置开始删除deleteCount项，并从该位置起插入val1,val2,...   
reverse：将数组反序   
sort(orderfunction)：按指定的参数对数组进行排序   
slice(start,end)：返回从原数组中指定开始下标到结束下标之间的项组成的新数组    
### 增
这里我们给 Map 在添加元素的时候用到的是 set    
	
	  let arr = [];
	  let map = new Map();
	  // 增
	  map.set('增加第一个参数','参数1');
	  arr.push('arr参数一','参数一');
	  console.log('map-arr',map,arr)
### 查 
在 map 中用 has 来查询一个 map 中是否包含某个元素,而在数组中用 arr.find() 来检查是不是有某个元素.而在数组中我们可以用 splice 方法;来完成,splice 方法的强大之处就在于他可以完成对一个数组的增删改,既可以用来修改一个数组,也可以删除数组的某个元素或者相连的某几个元素,是一个非常强大的方法.

## set 与 对象的对比
