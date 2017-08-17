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
let food = new Map();
let fruit = {},cook = function() {},drink = 'tea';   
food.set(fruit,'watermalone');
food.set(cook,'apple');
food.set(drink,'doughnut');
console.log(food);//
console.log(food.size);
console.log(food.get(cook));  
// food.delete(drink);
// console.log(food.has(drink));//false
console.log(food.keys());
console.log(food.values());
console.log(food.entries());
//--------------------------  Map over  --------------//















