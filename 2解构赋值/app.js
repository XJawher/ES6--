/* {
  let a,b,rest;
  [a,b] = [1,2];
  console.log(a,b)
}

{
  let a,b,rest;
  [a,b,...rest] = [1,2,3,4,5,5,6,6,6];
  console.info(a,b,rest)
}

{
  let a,b,rest;
  ({a,b} = {a : 3,b : 4});
  console.info(a,b)
}  */
/* 
{
  let a = 2,b = 1,rest = 0;
  [a,b] = [b,a]
  console.log(a,b)
}

{
  function f() {
    return [1,2]
  }
  let a,b;
  [a,b] = f();
  console.log(a,b)
} */

/* {
  function f(params) {
    return [1,23,4,5,6,7]
  }
  let a,b;
  [a,,,,b] = f();
  console.log(a,b)
} */


{
  let postData = {
    title:"abs",
    result:[{
      title:'aaa',
      result2:[{
        title:'sss'
      }]
    }]
  }
  let {title:title1,result:[{title:title2}],result:[{result2:[{title:title3}]}]} = postData;
  console.log(title1,title2,title3)
}



































