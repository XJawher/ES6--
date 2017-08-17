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
} 
let cook = new dinner();
console.log(cook.foods = 'beer');//set
console.log(cook.foods = 'beer');//set   
console.log(cook.foods);//get


//--------------------------  get set over  --------------//

