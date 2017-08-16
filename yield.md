## yield 
可以认为是一个基于生成器的 return。  
yield 关键字使生成器函数执行暂停，yield 关键字后面的表达式的值返回给生成器的调用者。它可以被认为是一个基于生成器的版本的 return关 键字。

yield关键字实际返回一个 IteratorResult 对象，它有两个属性，value 和 done。value 属性是对 yield 表达式求值的结果，而 done 是 false ，表示生成器函数尚未完全完成。

 

一旦在 yield expression 处暂停,  除非外部调用生成器的 next() 方法，否则生成器的代码将不能继续执行. 这使得可以对生成器的执行以及渐进式的返回值进行直接控制.