'use strict'

//-------------------------- class   ----------------------------------------------------//
  // class Chef { // 类名叫 chef 
  //   construcor(food = 'hotpot',drink = 'beer'){//创建一个 construcor 方法，基于这个类的对象都会自动的创建这个方法
  //     this.food = food;
  //     this.drink = drink;
  //   }
  //   cook(){//创建一个 cook 方法，这个方法的作用就是把 food 打印出来
  //     return this.food + this.drink   

  //   }
    
  // } 
  // let li = new Chef('hotpot222','beer6666');   
  // console.log(li.cook()); 
//-------------------------- class over  --------------//
//-------------------------- generators start  --------------//
  //    
  // let dinner = function* (foods){
  //   for(var i = 0;i < foods.length;i++){
  //     yield foods[i]; 
  //   }
  // }    
  // let eat = dinner(['hotpot','beer','cookie'])    
  // console.log(eat.next());//{value:"hotpot",done:false}     
  // console.log(eat.next());//{value:"beer",done:false}    
  // console.log(eat.next());//{value:"cookie",done:false}    
  // console.log(eat.next());//{value:undefined,done:true} 
  
//-------------------------- generators over  --------------//



//-------------------------- get set start   --------------//
// class dinner { 
//   constructor(food = 'hotpot') { 
//     this.food = food;  
//     this.dish = [];
//   } 

//   get foods() {
//     return this.dish;
//   }
//   set foods(dish) {
//     this.dish.push(dish)
//   }
// } 
// let cook = new dinner();
// console.log(cook.foods = 'beer');//set > beer
// console.log(cook.foods = 'tea');//set >  tea
// console.log(cook.foods);//get > ['beer','tea']


//--------------------------  get set over  --------------//

//-------------------------- 静态方法 start   --------------//


/*class dinner { 
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
dinner.cook(8);*/





//--------------------------  静态方法 over  --------------//

//-------------------------- extends start   --------------//

/*class foods {
  constructor(bread,drink) {
    this.bread = bread;
    this.drink = drink;
  }
  eat () {
    // return `今天享受${this.bread}和${this.drink}`
    console.log( `今天享受${this.bread}和${this.drink}`)
  }
}

class dinner extends foods {
  constructor(bread,drink){
    super(bread,drink);
  }
}
let li = new dinner('writeBread','beer');
// console.log(li.eat());//今天享受writeBread和beer
li.eat();*/




//--------------------------  extends over  --------------//




//-------------------------- extends start   --------------//
/*let set = new Set();   
['milk','meal','tea','hotpot','wine','beer','meal','hotpot'].forEach(x => set.add(x));


set.add('老干妈');
console.log(set)//Set { 'milk', 'meal', 'tea', 'hotpot', 'wine', 'beer', '老干妈' }
console.log(set.has('tea'));//true
set.delete('meal');
console.log(set);//Set { 'milk', 'tea', 'hotpot', 'wine', 'beer', '老干妈' }
console.log(set.size);//6
// set.clear();
// console.log(set);//Set {}    

let Arr = Array.from(set);
console.log(Arr)//[ 'milk', 'tea', 'hotpot', 'wine', 'beer', '老干妈' ] 去重新思路*/

//--------------------------  静态方法 over  --------------//


//--------------------------  Map start  --------------//
// let food = new Map();
// let fruit = {},cook = function() {},drink = 'tea';   
// food.set(fruit,'watermalone');
// food.set(cook,'apple');
// food.set(drink,'doughnut');
// console.log(food);//
// console.log(food.size);
// console.log(food.get(cook));  
// // food.delete(drink);
// // console.log(food.has(drink));//false
// console.log(food.keys());
// console.log(food.values());
// console.log(food.entries());
//--------------------------  Map over  --------------//



// {
//   let arr = Array.of(1,"sdad",5,[1,3,"ee"],2)
//   console.log("arr=",arr)
// }


// {
//   let  arr = [1.3,4,5,6,7,7];
//   console.log(Array.from(arr,(item)=>{return item*2}))
// }

// {
//   console.log("fill",[1,18,"","sss",undefined].fill('fill',1,2))
// }  


/* {
  for(let index of ['a','b','c'].keys()){
    console.log('keys',index)
  }
  for(let values of ['a','b','c'].values()){
    console.log('values',values)
  }
  for(let entries of ['a','b','c'].entries()){
    console.log('entries',entries)
  }
} */


// {
//   console.log([1,2,1,3,4,5,6,5,,89,7].find(function(item){return item>4}))
//   console.log([1,2,1,3,4,5,6,5,,89,7].findIndex(function(item){return item>4}))
// }

/* 
{
  console.log("判断包含",[11,3,"test",NaN].includes("test"))
} */


// {
//   function test(x,y = "a") {
//     console.log(x,y)
//   }
//   test('b');
// }


  // let   x = 'abc';
  // function test2(e,y=x) {
  //   console.log('x = abc ',e,y)
  // }
  // test2('def')
  
    // var   x1 = 'abc';
    // var y1 = '';
    // y1 = x1 ;
    // console.log('x = abc ',x1,y1)
    // function test2(x1,y1) {
    //   console.log('x = abc ',x1,y1)
    // }
    // test2()

/* {
  //简洁表示法
  let o = 1;
  let k = 2;
  let ES5 = {
    o:o,
    k:k
  };
  let ES6 = {
    o,k
  }
  console.log(ES5,ES6)//{ o: 1, k: 2 } { o: 1, k: 2 }  
}

{
  let ES5 = {
    o: function () {
      console.log("ES5")
    }
  };
  let ES6 = {
    o (){
      console.log('ES6')
    }
  }
  console.log(ES5.o(),ES6.o())
} */

/* {
  //属性表达式
  let a = 'b';
  let ES5 = {
    a:'hello'
  };
  let ES6 = {
    [a] : 'world'
  }
  console.log(ES5,ES6)//{ a: 'hello' } { b: 'world' }
}


{
  //新增 API
  //Object.is() 判断是不是相等    
  console.log('字符串',Object.is(1,1))
} */

/* {
  console.log('拷贝',Object.assign({b:2,c:3,d:4},{a:1}))//拷贝 { b: 2, c: 3, d: 4, a: 1 }
} */





/* {
  let entries = { b: 2, c: 3, d: 4, a: 1 };
  for (let [keys,values] of Object.entries(entries) ){
    console.log([keys,values])
  }
}
[ 'b', 2 ]
[ 'c', 3 ]
[ 'd', 4 ]
[ 'a', 1 ] */

/* {
  let a = Symbol();
  let b = Symbol();
  console.log(a === b)

  let a1 = Symbol.for(1);
  let a2 = Symbol.for(1);
  console.log(a1 === a2)
}
 */
/* {
  let a = Symbol.for('abc');

  let obj = {
    [a] : 123,
    'abc':456,
    'def':789
  }
  console.log('obj',obj)//obj { abc: 456, def: 789, [Symbol(abc)]: 123 }

  for(let [keys,values] of Object.entries(obj)){
    console.log('keys,values   ',[keys,values])
  }
  // obj { abc: 456, def: 789, [Symbol(abc)]: 123 }
  // [ 'abc', 456 ]
  // [ 'def', 789 ]
  console.log('getOwnPropertySymbols   ',Object.getOwnPropertySymbols(obj))

  console.log('Reflect.ownKeys()   ',Reflect.ownKeys(obj))
} */
/* {
  let list = new Set();
  list.add(1);
  list.add(2);
  console.log('size   ',list.size)

  let arr = [1,2,3,4,22,99,5,6,4,3,2,1,'1','2','3'];
  let list2 = new Set(arr);
  console.log('list2  ',list2)//list2   Set { 1, 2, 3, 4, 5, 6, '1', '2', '3' }



}

 */

// {
//   //map 
//   let arr = [123];
//   let map = new Map();
//   map.set(arr,456);
//   console.info('map   ',map)    //map    Map { [ 123 ] => 456 }
// }

/* {
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
 */


 {
  let arr = [];
  let map = new Map();
  // 增
  map.set('增加第一个参数','参数1');
  arr.push('arr参数一','参数一');
  arr.push({'tt':'参数一'});
  arr.unshift('arr参数2','参数2');
  arr.unshift('t','参数t');
  console.log('map-arr',map,arr)
  // 删

  // 改

  // 查
  let arr_exist = arr.find(item=>item.t) ;
  let map_exsit = map.has('增加第一个参数');
  console.info('arr_exist,map_exsit  ',arr_exist,map_exsit)
}
    

