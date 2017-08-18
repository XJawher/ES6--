// console.log("hello-world");
// 设定回调动画--真的是回调地狱啊
// var ball = document.querySelector('.ball');
var ball1 = document.querySelector('.ball1')
var ball2 = document.querySelector('.ball2')
var ball3 = document.querySelector('.ball3')
console.log(parseInt(ball1.style.marginLeft,10))
function animate(ball,distance,cb) {
  setTimeout(function() {
    var marginLeft = parseInt(ball.style.marginLeft,10)//由于是带单位，先转化为数字

    if (marginLeft === distance) { //边距相同的时候代表球已经运动到了要的位置
      cb && cb() 
    }
    else {
      if (marginLeft < distance) {
        marginLeft++  
      }
      else {
        marginLeft--  
      }

      ball.style.marginLeft = marginLeft +"px"/*把调整好的值设置给 ball*/
      animate(ball,distance,cb)
    }      
  },13) 
}


/*回调大法好*/
animate(ball1,100,function(){
  animate(ball2,200,function(){
    animate(ball3,300,function(){
      animate(ball3,150,function(){
        animate(ball2,150,function(){
          animate(ball1,150,function(){

          })
        })
      })
    })
  })
})



































