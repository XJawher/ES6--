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

      ball.style.marginLeft = marginLeft +"px"
      /*把调整好的值设置给 ball 这里要注意，如果在 HTML 文件的开头没有加 <!DOCTYPE html> 中的 html 
      也就是开头是 <!DOCTYPE> 那么这里就不能加 “px” ball.style.marginLeft = marginLeft
      加了 html 才可以加 "px" 单位，要不然动画不能正常执行，在回调三步以后就 marginLeft = undefined
      了 
      */ 
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



































